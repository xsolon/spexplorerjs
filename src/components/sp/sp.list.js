import $ from "jquery";
import "../logger/logger.js";
import "./sp.base.js";

(function (ns, $) {

	var SpDal = function (args, log, error) {

		var ctx = null;
		try {
			ctx = new SP.ClientContext();
		} catch (e) {
			ctx = SP.ClientContext.get_current();
		}
		var web = ctx.get_web();
		var lists = web.get_lists();
		var list = null;
		var items = null;
		var listFields = null;

		ctx.load(web, ["Id", "ServerRelativeUrl"]);
		ctx.load(lists, "Include(Title, Fields.Include(Title))");
		ctx.load(lists, "Include(Fields.Include(Title))");

		log = log || ns.log;
		error = log || ns.log;

		var listExists = function (lists, listTitle) {

			return $.Deferred(function (dfd) {
				var onloaded = function () {
					var result = { exists: false, list: null };

					var le = lists.getEnumerator();
					while (le.moveNext()) {
						var list = le.get_current();
						if (list.get_title() == listTitle) {
							result.exists = true;
							result.list = list;
							break;
						}
					}
					log({ listExists: listTitle, result: result });
					dfd.resolve(result);

				};
				if (lists.get_data().length == 0) { // not initialized

					var ctx = lists.get_context();

					ctx.executeQueryAsync(function () {
						onloaded();
					},
					function (r, a) { reqFailure(r, a, "listExists", dfd); });
				} else {
					onloaded();
				}
			}).promise();

		};
		var pathSteps = function (path) {
			var bits = path.split("/");
			var qu = [];
			for (var i = bits.length; i > 0; i--) {
				var current = bits.slice(0, i).join("/");
				if (current == "") current = "/";
				qu.push(current);
			}
			return qu;
		};

		//var emptyPromise = function () { // couldn't resist
		//	return $.Deferred(function (dfd) {
		//		dfd.resolve();
		//	}).promise();
		//};
		var addItems = function (items, splist, spfields, folderUrl) {
			var dfd = $.Deferred();

			getlist().done(function () {
				splist = list;
				spfields = spfields || listFields;

				if (items && items.length > 0) {
					var spItems = [];
					for (var i = 0; i < items.length; i++) {

						var data = items[i];
						var itemCreateInfo = new SP.ListItemCreationInformation();
						if (folderUrl) {
							itemCreateInfo.set_folderUrl(folderUrl);
						}

						var newspitem = splist.addItem(itemCreateInfo);
						for (var f in data) {
							var fieldType = spfields[f].get_typeAsString();
							var val = null;
							if (fieldType == "URL") {
								val = new SP.FieldUrlValue();
								val.set_url(data[f]);
							} else if (fieldType.search("Lookup") == 0) {

								var itemVal = data[f];
								if (itemVal) {
									if (itemVal.length) {
										val = [];
										for (var j = 0; j < itemVal.length; j++) {
											var iVal = new SP.FieldLookupValue();
											iVal.set_lookupId(itemVal[j]);
											val.push(iVal);
										}
									} else {
										val = new SP.FieldLookupValue();
										val.set_lookupId(itemVal);
									}
								}
							} else {
								val = data[f];
							}

							newspitem.set_item(f, val);

						}
						newspitem.update();
						ctx.load(newspitem);
						spItems.push(newspitem);
					}
					ctx.executeQueryAsync(function () {
						log("addItems done");
						dfd.resolve(spItems);
					},
					function (r, a) { reqFailure(r, a, "addItems" + args.listTitle, dfd); });
				} else {
					dfd.resolve();
				}
			});

			return dfd.promise();
		};
		//var defaultItems = function (spfields) {
		//	if (typeof args.DefaultItems == "function") {
		//		args.DefaultItems(spfields, me).done(function (items) {
		//			addItems(spfields, items);
		//		});
		//	} else {
		//		addItems(spfields, args.DefaultItems);
		//	}
		//};
		var handleOnReady = function (splist, dfd) {
			log("OnListReady");
			if (args.OnListReady) {
				args.OnListReady(me, splist, ctx).done(function () {
					dfd.resolve(splist);
				});
			} else
				dfd.resolve(splist);
		};
		var handleOnCreated = function (splist, dfd) {
			log("OnListCreated");
			if (args.OnListCreated) {
				args.OnListCreated(me, splist, ctx).done(function () {
					dfd.resolve(splist);
				});
			} else
				dfd.resolve(splist);
		};

		var clearActions = function () {
			var dfd = $.Deferred();
			var actions = web.get_userCustomActions();
			actions.clear();
			ctx.load(actions);

			ctx.executeQueryAsync(function () {
				dfd.resolve(actions);
			},
			function (r, a) { reqFailure(r, a, "clearActions", dfd); });

			return dfd.promise();
		};
		var ensureFolder = function (path) {
			var dfd = $.Deferred();

			folderExists(path).done(function (folder) {
				if (folder == false) {

					var parentFolders = pathSteps(path);
					var parentFolderPath = parentFolders[1];
					var bits = path.split("/");
					var name = bits[bits.length - 1];
					ensureFolder(parentFolderPath).done(function (/*parentSpFolder*/) {
						createFolder(name, parentFolderPath).done(function (folder) {
							dfd.resolve(folder);
						});
					});
				} else {
					dfd.resolve(folder);
				}
			});
			return dfd.promise();
		};
		var folderExists = function (path) {
			var dfd = $.Deferred();
			var folder = web.getFolderByServerRelativeUrl(path);

			ctx.load(folder, "Name", "ServerRelativeUrl");

			ctx.executeQueryAsync(function () {
				//if (folder.get_exists()) { // Not available in 2013
				//    // Folder exists and isn't hidden from us. Print its name.
				//    //console.log(folder.get_name());
				//    dfd.resolve(folder);
				//}
				//else {
				//    dfd.resolve(folder);
				//    //console.log("Folder exists but is hidden (security-trimmed) for us.");
				//}
				try {
					//var url = folder.get_serverRelativeUrl();
					dfd.resolve(folder);
				} catch (e) {
					dfd.resolve(false);
				}
			},
			function (s, args) {
				if (args.get_errorTypeName() === "System.IO.FileNotFoundException") {
					// Folder doesn't exist at all.
					//console.log("Folder does not exist.");
					dfd.resolve(false);
				} else {
					// An unexpected error occurred.
					//console.log("Error: " + args.get_message());
					dfd.resolve(false);
				}
			});

			return dfd.promise();

		};
		var createFolder = function (name, parentFolderPath) {
			if (list) {
				list.set_enableFolderCreation(true);
				list.update();
			}
			var itemCreateInfo = new SP.ListItemCreationInformation();
			itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
			itemCreateInfo.set_leafName(name);
			if (parentFolderPath) {
				itemCreateInfo.set_folderUrl(parentFolderPath);
			}
			var li = list.addItem(itemCreateInfo);
			li.set_item("Title", name);
			li.update();

			var dfd = $.Deferred();
			ctx.load(li);
			var folder = li.get_folder();
			ctx.load(folder);
			ctx.executeQueryAsync(function () {
				dfd.resolve(folder);
			},
			function (r, a) { reqFailure(r, a, "createFolder", dfd); });

			return dfd.promise();

		};
		var addCustomAction = function (location, ext, perms) {
			var actions = list.get_userCustomActions();

			var action = actions.add();

			action.set_location(location);
			action.set_commandUIExtension(ext);
			action.set_sequence(0);
			if (perms) action.set_rights(perms);
			action.update();
			ctx.load(action);
			var dfd = $.Deferred();

			ctx.executeQueryAsync(function () {
				log("addCustomAction.done");
				dfd.resolve(action);
			},
			function (r, a) { reqFailure(r, a, "addCustomAction", dfd); });

			return dfd.promise();
		};
		var addScriptLink = function (name, url, sequence) {
			var dfd = $.Deferred();

			var actions = ctx.get_site().get_userCustomActions();

			var action = actions.add();
			action.set_location("ScriptLink");
			action.set_title(name);
			action.set_scriptSrc(url);
			action.set_sequence(sequence);
			action.update();

			ctx.load(action);

			ctx.executeQueryAsync(function () {
				dfd.resolve(action);
			},
			function (r, a) { reqFailure(r, a, "addScriptLink", dfd); });

			return dfd.promise();

		};
		//var getGroupsOld = function () {
		//	return $.Deferred(function (dfd) {
		//		var groupCollection = web.get_siteGroups();
		//		ctx.load(groupCollection);

		//		ctx.executeQueryAsync(function (sender/*, args*/) {
		//			var res = {};
		//			var le = groupCollection.getEnumerator();
		//			while (le.moveNext()) {
		//				var group = le.get_current();
		//				var groupName = group.get_title();
		//				res[groupName] = group;
		//			}
		//			dfd.resolve(res);
		//		},
		//		function (r, a) { reqFailure(r, a, "getGroups", dfd); });
		//	}).promise();

		//};
		var breakRoleInheritance = function (copyRoleAssignments, clearSubscopes) {
			list.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
			list.update();

			return loadSpElem(list, ctx);

		};

		var breakItemRoleInheritance = function (copyRoleAssignments, clearSubscopes, item) {
			item = item || list;
			item.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
			item.update();

			return loadSpElem(item, ctx);

		};
		//var breakRoleInheritanceRest = function (copyRoleAssignments, clearSubscopes, webUrl, listName) {
		//	webUrl = webUrl || web.get_serverRelativeUrl();
		//	listName = listName || args.ListTitle;
		//	log("breakingRole Inheritance: " + listName);
		//	var req = window.location.href.substring(0, window.location.href.indexOf(window.location.pathname)) +
		//              "{0}/_api/web/lists/getByTitle('{1}')/breakroleinheritance(copyRoleAssignments={2},clearSubscopes={3})";
		//	req = req.replace("{0}", webUrl).replace("{1}", listName).replace("{2}", copyRoleAssignments)
		//		.replace("{3}", clearSubscopes);

		//	return $.ajax({
		//		url: req,
		//		type: "POST",
		//		headers: { "accept": "application/json;odata=verbose" },
		//	});
		//};

		var addPermission = function (principalIn, permissions, securable, parentWeb) {
			return $.Deferred(function (dfd) {
				parentWeb = parentWeb || web;
				securable = securable || list;
				var safePrincipal = principalIn;
				var safeAddPermission = function (principal) {

					var collContribute = SP.RoleDefinitionBindingCollection.newObject(ctx);

					for (var i = 0; i < permissions.length; i++) {
						var perm = permissions[i];
						log("adding Permissions " + perm);

						var rdContribute = parentWeb.get_roleDefinitions().getByName(perm);
						// Create a new RoleDefinitionBindingCollection.
						// Add the role to the collection.
						collContribute.add(rdContribute);
					}

					// Get the RoleAssignmentCollection for the target web.
					//var assignments = securable.get_roleAssignments();
					// assign the group to the new RoleDefinitionBindingCollection.
					//var roleAssignmentContribute = assignments.add(principal, collContribute);

					ctx.load(principal);

					ctx.executeQueryAsync(
						function (/*sender*//*, args*/) {
							dfd.resolve(principal);
						},
						function (r, a) { reqFailure(r, a, "addPermission", dfd); });

				};

				if (SP.Group.isInstanceOfType(principalIn)) {
					safeAddPermission(safePrincipal);
				} else {
					ensureGroup(principalIn).done(function (res) {
						safePrincipal = res;
						safeAddPermission(safePrincipal);
					});

				}
			}).promise();
		};

		var processAsQueue = function (arr, action) {
			// make sure array doesn't change

			return $.Deferred(function (dfd) {
				var step = 0;
				var doNext = function () {
					if (arr == null || (step >= (arr.length))) {
						dfd.resolve();
					} else {
						var item = arr[step++];
						action(item, ctx, list, web).done(function () {
							doNext();
						});
					}
				};

				if (typeof arr == "function") {
					arr().done(function (items) {
						arr = items;
						doNext();
					});
				} else {
					doNext();
				}
			}).promise();
		};
		var spGroups = null;
		var getGroups = function (force) {
			if (force) {
				spGroups = null;
			}
			return $.Deferred(function (dfd) {

				if (spGroups == null) {
					var groupCollection = web.get_siteGroups();
					ctx.load(groupCollection);

					ctx.executeQueryAsync(function (/*sender, args*/) {
						spGroups = {};
						var le = groupCollection.getEnumerator();
						while (le.moveNext()) {
							var group = le.get_current();
							var groupName = group.get_title();
							spGroups[groupName] = group;
						}
						log("Loaded Groups: " + groupCollection.get_count());
						dfd.resolve(spGroups);
					},
					function (r, a) { reqFailure(r, a, "getGroups", dfd); });

				} else {
					dfd.resolve(spGroups);
				}
			}).promise();

		};
		var ensureGroup = function (name, desc) {
			return $.Deferred(function (dfd) {

				getGroups().done(function (spGroups) {
					if (spGroups[name]) {
						dfd.resolve(spGroups[name]);
					} else {
						createGroup(name, desc).done(function (group) { dfd.resolve(group); });
					}
				});
			}).promise();
		};
		var ensureGroups = function (groups) {
			return $.Deferred(function (dfdG) {
				getGroups().done(function (/*spGroups*/) {
					processAsQueue(groups,
						function (group) {
							return $.Deferred(function (dfd) {
								ensureGroup(group.name, group.desc).done(function (spGroup) {
									log("Adding permissions for " + group.name);
									addPermission(spGroup, group.permissions, web).done(function () {
										log("adding pemission is done");
										dfd.resolve();
									});
								});
							}).promise();
						}).done(function () { dfdG.resolve(); });
				}); //;
			}).promise();
		};
		var createGroup = function (name, desc, parentWeb) {
			return $.Deferred(function (dfd) {
				parentWeb = parentWeb || web;
				var ctx = parentWeb.get_context();
				var groupCollection = parentWeb.get_siteGroups();

				log("creating group: " + name);
				var spGroup = groupCollection.add((function () {
					var membersGRP = new SP.GroupCreationInformation();
					membersGRP.set_title(name);
					membersGRP.set_description(desc);
					return membersGRP;
				})());

				spGroup.set_onlyAllowMembersViewMembership(false);
				spGroup.update();
				ctx.load(spGroup);
				ctx.executeQueryAsync(function () {
					dfd.resolve(spGroup);
				},
				function (r, a) { reqFailure(r, a, "createGroups", dfd); });
			}).promise();

		};
		var createList = function (listTitle, templateType) {
			log("Creating list " + listTitle);
			return $.Deferred(function (dfd) {

				var listCreationInfo = new SP.ListCreationInformation();
				listCreationInfo.set_title(listTitle);
				listCreationInfo.set_templateType(templateType);

				var oList = web.get_lists().add(listCreationInfo);

				ctx.load(oList);

				ctx.executeQueryAsync(function () {
					log(args.ListTitle + " creation done");
					list = oList;
					handleOnCreated(list, dfd);
				}, function (r, a) { reqFailure(r, a, "createList", dfd); });

			}).promise();
		};
		var reqFailure = function (req, reqargs, from, dfd) { // log context failure

			var msg = from +
                "(list:" +
                args.ListTitle +
                ") : Request failed " +
                reqargs.get_message() +
                "\n" +
                reqargs.get_stackTrace();
			error(msg);

			if (dfd)
				dfd.reject(msg);

		};
		var ensureList = function (web, args) {
			return $.Deferred(function (dfd) {

				if (list != null) {
					dfd.resolve(list);
				} else {

					lists = web.get_lists();

					var done = function () {
						log("lists loaded");
						listExists(lists, args.ListTitle).done(function (res) {
							if (res.exists) {
								log("list already exists");
								list = res.list;

								var rootFolder = list.get_rootFolder();
								ctx.load(rootFolder, ["ServerRelativeUrl"]);
								ctx.executeQueryAsync(function () {
									ensureFields(list).done(function () {
										dfd.resolve(list);
									});

								});

							} else {
								createList(args.ListTitle, args.ListTemplate).done(function (splist) {

									var rootFolder = splist.get_rootFolder();
									ctx.load(rootFolder, ["ServerRelativeUrl"]);
									ctx.executeQueryAsync();

									var defaultItems = function (spfields) {
										if (typeof args.DefaultItems == "function") {
											args.DefaultItems(spfields, me).done(function (items) {
												addItems(items, splist, spfields);
											});
										} else {
											addItems(args.DefaultItems, splist, spfields);
										}
									};
									log(args.ListTitle + ": creating fields");

									ensureFields(splist, args.Fields || []).done(function (spfields) {
										defaultItems(spfields);
										if (args.Permissions) {
											breakRoleInheritance(false, true).done(function () {
												log("done with inheritance");
												processAsQueue(args.Permissions,
													function (entry) {
														var groupName = entry.name;
														var perms = entry.permissions;
														log("adding perm: " + groupName + " to " + args.ListTitle);
														return addPermission(groupName, perms, splist);
													}).done(function () {
													log("done adding permissions");
													handleOnReady(splist, dfd);
												});
											});
										} else {
											handleOnReady(splist, dfd);
										}
									}).fail(function (err) {
										log(err);
									});

								}).fail(function (err) {
									
									log(err);
								});
							}

						});
					};

					log("loading lists...");
					ctx.load(lists);

					ctx.executeQueryAsync(done, function (r, a) { reqFailure(r, a, "ensureList", dfd); });
				}
			}).promise();
		};
		var ensureFields = function (list, fields) {
			fields = fields || [];
			var spfields = list.get_fields();
			var getMarkup = function (field) {
				return $.Deferred(function (dfd) {

					var xml = field.markup;
					if (typeof field.markup == "function") {
						field.markup(ctx, list, spfields, lists, web).done(function (xml) {
							dfd.resolve(xml);
						});
					} else {
						dfd.resolve(xml);
					}
				}).promise();
			};
			return $.Deferred(function (dfd) {
				var done = function () {
					spfields = list.get_fields();

					ctx.load(spfields, "Include(Title,FieldTypeKind,TypeAsString,InternalName)");
					ctx.executeQueryAsync(function () {
						log("existing fields loaded");
						var le = spfields.getEnumerator();
						var parsed = {};
						while (le.moveNext()) {
							var field = le.get_current();
							parsed[field.get_internalName()] = field;
						}
						listFields = parsed;
						dfd.resolve(parsed);
					}, function onError(sender, args) {
						dfd.reject("Request failed " + args.get_message() + "\n" + args.get_stackTrace());
					});

				};
				processAsQueue(fields,
					function (field) {
						return $.Deferred(function (fieldDfd) {
							getMarkup(field).done(function (xml) {

								log("adding: " + xml);
								var spField = spfields.addFieldAsXml(xml, true, SP.AddFieldOptions.defaultValue);

								if (field.post) {
									field.post(spField);
								}
								ctx.load(spField);
								fieldDfd.resolve();
							});
						}).promise();
					}).done(done);

			}).promise();
		};

		var deleteList = function (lists, listTitle) {
			log("deleting list " + listTitle);
			return $.Deferred(function (dfd) {

				listExists(lists, listTitle).done(function (listexists) {

					if (listexists.exists) {
						listexists.list.deleteObject();
						ctx.executeQueryAsync(function () {
							dfd.resolve("list deleted");
						},
						function (r, a) { reqFailure(r, a, "deleteList", dfd); });

					} else {
						dfd.resolve("list not found");
					}
				});
			}).promise();
		};
		var delTheList = function () {
			return deleteList(lists, args.ListTitle);
		};

		var loadSpElem = function (elem, sptx, caller) {

			sptx = sptx || ctx;
			return $.Deferred(function (dfd) {

				if (elem.length) {
					for (var i = 0; i < elem.length; i++) {
						sptx.load(elem[i]);
					}
				} else
					sptx.load(elem);

				sptx.executeQueryAsync(function () {
					dfd.resolve(elem);
				},
				function (r, a) {  reqFailure(r, a, caller || "loadSpElem", dfd); });

			}).promise();

		};
		var getlist = function () {
			return $.Deferred(function (dfd) {

				ensureList(web, args).done(function (list) {
					//ensureFields(list).done(function () {
					dfd.resolve(list, ctx, web);
					//});
				});

			}).promise();

		};
		var getitems = function (caml) {
			return $.Deferred(function (dfd) {
				//var rootFolder = list.get_rootFolder();
				var ctx = list.get_context();
				//var scripts = [];
				var queryXml = caml ||
                    args.DefaultQuery ||
                    "<View Scope='Recursive'>\
<ViewFields>\
<FieldRef Name='ID'></FieldRef>\
<FieldRef Name='Title'></FieldRef>\
</ViewFields><RowLimit>1000</RowLimit>\
</View>";
				//loadSpElem(rootFolder, ctx),
				$.when(getAll(list, ctx, queryXml)).done(function (items) {
					log(items);

					if (args.itemParser) {
						dfd.resolve(args.itemParser(items));
					} else {
						dfd.resolve(items);
					}
				}).fail(function () {
					
					error("getitems error");
				});
			}).promise();

		};
		var getItem = function (id) {
			return $.Deferred(function (dfd) {
				getlist().done(function (list) {
					var oListItem = list.getItemById(id);

					loadSpElem(oListItem, ctx).done(function (el) {
						dfd.resolve(el, list, web, ctx);
					}).fail(function (err) {
						dfd.reject(err);
					});
				});
			}).promise();
		};
		var saveItem = function (id, title, desc, script) {
			ctx = ctx || SP.ClientContext.get_current();

			var dfd = $.Deferred();

			var web = ctx.get_web();
			var list = web.get_lists();
			var targetList = list.getByTitle(args.ListTitle);
			var oListItem = null;

			if (id && id > 0) {
				oListItem = targetList.getItemById(id);
			} else {
				var itemCreateInfo = new SP.ListItemCreationInformation();
				oListItem = targetList.addItem(itemCreateInfo);
			}

			oListItem.set_item(args.FieldNames.title, title);
			oListItem.set_item(args.FieldNames.desc, desc);
			oListItem.set_item(args.FieldNames.script, script);

			oListItem.update();

			loadSpElem(oListItem, ctx).done(function (el) {
				dfd.resolve(el);
			}).fail(function (err) {
				dfd.reject(err);
			});

			return dfd.promise();
		};
		var getAll = function (splist, spctx, caml, folder, limit) {

			limit = limit || 0;
			splist = splist || list;
			spctx = spctx || ctx;
			var query = new SP.CamlQuery();

			var queryXml = caml ||
                "<View Scope='Recursive'>\
        <ViewFields>\
          <FieldRef Name='ID'></FieldRef>\
        </ViewFields><RowLimit>1000</RowLimit>\
      </View>";

			if (folder) {
				query.set_folderServerRelativeUrl(folder);
			}
			query.set_viewXml(queryXml);

			var items = [], spItems;

			getlist().done(function (splist) {

				var loadNext = function (pageInfo) {

					log("loading" + pageInfo);
					pageInfo = pageInfo || "";

					var pos = new SP.ListItemCollectionPosition();
					pos.set_pagingInfo(pageInfo);
					query.set_listItemCollectionPosition(pos);
					spItems = splist.getItems(query);
					spctx.load(spItems);

					var onSuccess = function onSuccess(/*sender, args*/) {
						parseRows(spItems);
						var position = spItems.get_listItemCollectionPosition();
						if (position !== null && (limit == 0 || items.length < limit)) {
							var info = position.get_pagingInfo();
							loadNext(info);
						} else {
							dfd.resolve(items, splist, listFields, web, ctx);
						}
					};

					spctx.executeQueryAsync(onSuccess,
						function (r, a) {
							
							reqFailure(r, a, "getAll", dfd);
							error("caml: " + caml);
						});

				};
				var parseRows = function (spItems) {
					var itemsCount = spItems.get_count();
					for (var i = 0; i < itemsCount; i++) {
						var item = spItems.itemAt(i);
						if (item) {
							items.push(item);
						}
					}
				};

				loadNext();

			}).fail(function () {
				
			});

			var dfd = $.Deferred();
			return dfd.promise();
		};

		var addWebPart = function (serverRelativeFormUrl, wpXml, zone, position) {

			return $.Deferred(function (dfd) {
				var oFile = web.getFileByServerRelativeUrl(serverRelativeFormUrl);

				var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);

				var oWebPartDefinition = lpm.importWebPart(wpXml);
				var oWebPart = oWebPartDefinition.get_webPart();

				var wp = lpm.addWebPart(oWebPart, zone || "LeftColumn", position || 0);
				var wps = lpm.get_webParts();
				ctx.load(wps, "Include(WebPart.Title)");

				loadSpElem([oWebPart, wp], ctx, "Add web part").done(function () {
					wp = wps.getById(wp.get_id());
					var wpp = wp.get_webPart();
					var props = wpp.get_properties();

					loadSpElem([wp, wpp, props]).done(function (/*res*/) {
						dfd.resolve(wp);
					});
				});

			});
		};

		var me = {
			addCustomAction: addCustomAction,
			args: args,
			deleteList: delTheList,
			addWebPart: addWebPart,
			getitems: function (force, caml) {
				if (force) {
					items = null;
				}
				return $.Deferred(function (dfd) {

					if (items) {
						dfd.resolve(items);

					} else {
						getlist().done(function (/*list*/) {
							getitems(caml).done(function (res) {
								items = res;
								dfd.resolve(items);
							});
						});

					}
				}).promise();
			},
			getitem: function (id) {
				return $.Deferred(function (dfd) {

					getItem(id).done(function (el) {
						dfd.resolve(el, list, web);
					});

				}).promise();
			},
			getlist: getlist,
			createGroup: createGroup,
			getGroups: getGroups,
			ensureGroups: ensureGroups,
			ensureGroup: ensureGroup,
			save: saveItem,
			addScriptLink: addScriptLink,
			clearActions: clearActions,
			createFolder: createFolder,
			loadSpElem: loadSpElem,
			processAsQueue: processAsQueue,
			ensureFolder: ensureFolder,
			getItems: getAll,
			addItems: addItems,
			ctx: ctx,
			list: list,
			spErrorHandler: reqFailure,
			breakItemRoleInheritance: breakItemRoleInheritance,
			breakRoleInheritance: breakRoleInheritance
		};
		return me;
	};

	ns.listapi = {
		dal : SpDal,
		version: "0.1"
	};

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);