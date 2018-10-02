/// <reference path="../../../../node_modules/@types/microsoft-ajax/index.d.ts" />
/// <reference path="../../../../node_modules/@types/sharepoint/index.d.ts" />
/// <reference path="../../logger/logger.js" />
/// <reference path="sp.folderapi.js" />
/// <reference path="sp.base.js" />

import "./sp.folderapi.js";

// v 0.0.14: 2018-09-10  - addItems better handle LookupValues, defaultItems is a promise
// v 0.0.12: 2018-09-07  - ensureFields check if field exists
// v 0.0.10: 2018-09-04  - bug in addPermissions
// v 0.0.9: 2018-08-16  - spdal: replaced log,error ctr arguments with a trace object
// v 0.0.9: 2018-08-14  - ensureFields: create each field per request
// v 0.0.8: 2018-06-01  - getitems default force to true
// v 0.0.8: 2018-06-04  - bugfixes
// v 0.0.7: 2018-05-24  - add getAll to List prototype
// v 0.0.6: 2018-05-17  - getByTitle
// v 0.0.5: 2018-05-16  - When adding new items, skip columns not found in the list
// v 0.0.4: 2018-04-28  - move to modules
// v 0.0.2: 2018-04-10  - argument can be a list
// v 0.0.1: 2018-04-04  - fallback to trace logging if necessary
//                      - new args.list parameter

(function (ns, $) {

	var debugging = window.location.href.search(/(local|debugsplist)/) > 0;
	var trace = ns.modules.logger.get("splist", debugging);
	var spapi = ns.modules.spapi;

	const getQuery = function (caml /* string */,
		folder /* string */) {

		var query = new SP.CamlQuery();

		const queryXml = caml || "<View Scope='Recursive'>\
		<ViewFields><FieldRef Name='ID'></FieldRef>\
		</ViewFields><RowLimit>1000</RowLimit>\
</View>";

		if (folder) {
			query.set_folderServerRelativeUrl(folder);
		}

		query.set_viewXml(queryXml);
		return query;
	};
	const runAllQuery = function (query, splist, spctx, limit) {
		spctx = spctx || splist.get_context();

		var items = [], spItems;

		var parseRows = function (currrentItems) {
			const itemsCount = currrentItems.get_count();
			for (let i = 0; i < itemsCount; i++) {
				const item = currrentItems.itemAt(i);
				if (item) {
					items.push(item);
				}
			}
		};

		var loadNext = function (pageInfo) {

			trace.debug(`page: ${pageInfo}`);
			pageInfo = pageInfo || "";

			const pos = new SP.ListItemCollectionPosition();
			pos.set_pagingInfo(pageInfo);
			query.set_listItemCollectionPosition(pos);
			spItems = splist.getItems(query);
			spctx.load(spItems);

			var onSuccess = function () /*sender, args*/ {
				parseRows(spItems);
				var position = spItems.get_listItemCollectionPosition();
				if (position !== null && (limit === 0 || items.length < limit)) {
					var info = position.get_pagingInfo();
					loadNext(info);
				} else {
					dfd.resolve(items, splist, spctx);
				}
			};

			spctx.executeQueryAsync(onSuccess, function (sender, error) {

				trace.error({ query: query, error: error, sender: sender });
				dfd.reject(sender, error);
			});
		};

		loadNext();

		var dfd = $.Deferred();
		return dfd.promise();
	};
	const getAll = function (splist /* SP.List */, spctx /*SP.ClientContext */, caml /* string */, folder/* string */, limit/* int */) {

		var query = getQuery(caml, folder);

		return runAllQuery(query, splist, spctx, limit);
	};

	var getFields = function (splist) {

		return $.Deferred(function (dfd) {

			var ctx = splist.get_context();
			var fields = splist.get_fields();
			ns.modules.spapi.loadSpElem(fields, ctx).done(function () {
				var spfields = ns.modules.spapi.collectionToArray(fields);
				spfields.sort(function (x, y) { return x.get_title().localeCompare(y.get_title()); });
				dfd.resolve(spfields);
			});
		}).promise();
	};

	var getByTitle = function (listTitle, ctx) {
		ctx = ctx || ns.modules.spapi.getCtx();
		return ctx.get_web().get_lists().getByTitle(listTitle);
	};
	const spDal = function (args, ctrace) {
		var ctx = null;
		var web = null;
		var lists = null;
		var list = null;
		var items = null;
		var listFields = null;

		(function () { //init

			if (SP.List.isInstanceOfType(args)) {
				list = args;
			} else if (SP.List.isInstanceOfType(args.list)) {
				list = args.list;
			}

			if (list != null) {
				ctx = list.get_context();
			} else {
				try {
					ctx = new SP.ClientContext();
				} catch (e) {
					ctx = SP.ClientContext.get_current();
				}
			}

			web = ctx.get_web();
			lists = web.get_lists();

			ctx.load(web, ["Id", "ServerRelativeUrl"]);
			ctx.load(lists, "Include(Title, Fields.Include(Title))");
			ctx.load(lists, "Include(Fields.Include(Title))");
		})();

		ctrace = ctrace || trace;

		var listExists = function (lists, listTitle) {

			return $.Deferred(function (dfd) {
				var onloaded = function () {
					var result = { exists: false, list: null };

					var le = lists.getEnumerator();
					while (le.moveNext()) {
						var list = le.get_current();
						if (list.get_title() === listTitle) {
							result.exists = true;
							result.list = list;
							break;
						}
					}
					ctrace.log({ listExists: listTitle, result: result });
					dfd.resolve(result);
				};
				if (lists.get_data().length === 0) {
					// not initialized

					var ctx = lists.get_context();

					ctx.executeQueryAsync(function () {
						onloaded();
					}, function (r, a) {
						reqFailure(r, a, "listExists", dfd);
					});
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
				if (current === "") current = "/";
				qu.push(current);
			}
			return qu;
		};

		var ensureCtype = function (name, fieldLinks) {
			return $.Deferred(function (dfd) {
				var cTypes = list.get_contentTypes();
				loadSpElem(cTypes).done(function () {

					var matches = $.grep(spapi.collectionToArray(cTypes), function (n) { return n.get_name() === name; });
					if (matches.length === 0) {
						ctrace.debug("Adding ctype" + name);
						addContentType(name, fieldLinks).done(function (ctype) {
							dfd.resolve(ctype);
						});
					} else {
						dfd.resolve(matches[0]);
					}
				});
			}).promise();
		};

		var addContentType = function (name, fieldLinks) {
			return $.Deferred(function (dfd) {
				var webCTypes = web.get_contentTypes();

				list.set_contentTypesEnabled(true);
				list.update();

				var listFields = list.get_fields();
				loadSpElem([webCTypes, listFields]).done(function () {
					var matches = $.grep(spapi.collectionToArray(webCTypes), function (n) { return n.get_name() === name; });

					if (matches.length === 0) {
						ctrace.error(name + " not found");
					} else {
						var webcType = matches[0];
						var listCTypes = list.get_contentTypes();
						listCTypes.addExistingContentType(webcType);

						loadSpElem(listCTypes).done(function () {
							var ctype = $.grep(spapi.collectionToArray(listCTypes), function (n) { return n.get_name() === name; })[0];

							if (fieldLinks) {
								listFields = spapi.collectionToArray(listFields);

								fieldLinks.forEach(function (fieldName) {

									ctrace.debug("---Addfield " + fieldName + " field link");

									var localField = $.grep(listFields, function (n) { return n.get_internalName() === fieldName; })[0];

									var fieldLink = new SP.FieldLinkCreationInformation();
									fieldLink.set_field(localField);
									ctype.get_fieldLinks().add(fieldLink);
								});
								ctype.update();
								list.update();
								loadSpElem(ctype).done(function () {
									dfd.resolve(ctype);
								});
							} else {
								dfd.resolve(ctype);
							}
						});
					}
				});
			}).promise();
		};

		var addItems = function (items, splist, spfields, folderUrl) {
			var prepLookupValue = function (raw) {
				var val = null;
				if (raw == null || SP.User.isInstanceOfType(raw) || SP.FieldLookupValue.isInstanceOfType(raw)) {
					val = raw;
				} else if (Array.isInstanceOfType(raw)) {
					val = [];
					raw.forEach(function (item) {
						if (parseInt(item) > 0) {
							var iVal = new SP.FieldLookupValue();
							iVal.set_lookupId(item);
							val.push(iVal);
						}
						else {
							val.push(item);
						}
					});
				}
				else if (parseInt(raw) > 0) {
					val = new SP.FieldLookupValue();
					val.set_lookupId(raw);
				}
				return val;
			};
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
							if (!spfields[f]) continue;
							var fieldType = spfields[f].get_typeAsString();
							var val = null;
							if (fieldType === "URL") {
								val = new SP.FieldUrlValue();
								val.set_url(data[f]);
							} else if (fieldType.search("Lookup") === 0) {

								var itemVal = data[f];
								val = prepLookupValue(itemVal);
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
						ctrace.log("addItems done");
						dfd.resolve(spItems);
					}, function (r, a) {
						reqFailure(r, a, "addItems" + args.ListTitle, dfd);
					});
				} else {
					dfd.resolve();
				}
			});

			return dfd.promise();
		};
		var handleOnReady = function (splist, dfd) {
			ctrace.log("OnListReady");
			if (args.OnListReady) {
				args.OnListReady(me, splist, ctx).done(function () {
					dfd.resolve(splist);
				});
			} else dfd.resolve(splist);
		};
		var handleOnCreated = function (splist, dfd) {
			ctrace.log("OnListCreated");
			if (args.OnListCreated) {
				args.OnListCreated(me, splist, ctx).done(function () {
					dfd.resolve(splist);
				});
			} else dfd.resolve(splist);
		};

		var clearActions = function () {
			var dfd = $.Deferred();
			var actions = web.get_userCustomActions();
			actions.clear();
			ctx.load(actions);

			ctx.executeQueryAsync(function () {
				dfd.resolve(actions);
			}, function (r, a) {
				reqFailure(r, a, "clearActions", dfd);
			});

			return dfd.promise();
		};

		/**
		 * returns folder (creating it and its path if necessary)
		 * @param {string} serverRelativeUrl
		 */
		var ensureFolder = function (serverRelativeUrl/*string*/) {
			var dfd = $.Deferred();

			folderExists(serverRelativeUrl).done(function (folder) {
				if (folder == false) {

					var parentFolders = pathSteps(serverRelativeUrl);
					var parentFolderPath = parentFolders[1];
					var bits = serverRelativeUrl.split("/");
					var name = bits[bits.length - 1];
					ensureFolder(parentFolderPath).done(function () /*parentSpFolder*/ {
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
		/**
		 * @param {string} serverRelativeUrl
		 */
		var folderExists = function (serverRelativeUrl) {
			var dfd = $.Deferred();
			var folder = web.getFolderByServerRelativeUrl(serverRelativeUrl);

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
			}, function (s, args) {
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
			}, function (r, a) {
				reqFailure(r, a, "createFolder", dfd);
			});

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

			ctx.loadSpElem(action).done(function () {
				ctrace.log("addCustomAction.done");
				dfd.resolve(action);
			});

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
			}, function (r, a) {
				reqFailure(r, a, "addScriptLink", dfd);
			});

			return dfd.promise();
		};
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
				var safeAddPermission = function safeAddPermission(principal) {

					var collContribute = SP.RoleDefinitionBindingCollection.newObject(ctx);

					for (var i = 0; i < permissions.length; i++) {
						var perm = permissions[i];
						ctrace.log("adding Permissions " + perm);

						var rdContribute = parentWeb.get_roleDefinitions().getByName(perm);
						// Create a new RoleDefinitionBindingCollection.
						// Add the role to the collection.
						collContribute.add(rdContribute);
					}

					// Get the RoleAssignmentCollection for the target web.
					var assignments = securable.get_roleAssignments();
					// assign the group to the new RoleDefinitionBindingCollection.
					assignments.add(principal, collContribute);

					ctx.load(principal);

					ctx.executeQueryAsync(function () /*sender*/ /*, args*/ {
						dfd.resolve(principal);
					}, function (r, a) {
						reqFailure(r, a, "addPermission", dfd);
					});
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

		var spGroups = null;
		var getGroups = function (force) {
			if (force) {
				spGroups = null;
			}
			return $.Deferred(function (dfd) {

				if (spGroups == null) {
					var groupCollection = web.get_siteGroups();
					ctx.load(groupCollection);

					ctx.executeQueryAsync(function () /*sender, args*/ {
						spGroups = {};
						var le = groupCollection.getEnumerator();
						while (le.moveNext()) {
							var group = le.get_current();
							var groupName = group.get_title();
							spGroups[groupName] = group;
						}
						ctrace.log("Loaded Groups: " + groupCollection.get_count());
						dfd.resolve(spGroups);
					}, function (r, a) {
						reqFailure(r, a, "getGroups", dfd);
					});
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
						createGroup(name, desc).done(function (group) {
							dfd.resolve(group);
						});
					}
				});
			}).promise();
		};
		var ensureGroups = function (groups) {
			return $.Deferred(function (dfdG) {
				getGroups().done(function () /*spGroups*/ {
					ns.modules.funcs.processAsQueue(groups, function (group) {
						return $.Deferred(function (dfd) {
							ensureGroup(group.name, group.desc).done(function (spGroup) {
								ctrace.log("Adding permissions for " + group.name);
								addPermission(spGroup, group.permissions, web).done(function () {
									ctrace.log("adding pemission is done");
									dfd.resolve();
								});
							});
						}).promise();
					}).done(function () {
						dfdG.resolve();
					});
				}); //;
			}).promise();
		};
		var createGroup = function (name, desc, parentWeb) {
			return $.Deferred(function (dfd) {
				parentWeb = parentWeb || web;
				var ctx = parentWeb.get_context();
				var groupCollection = parentWeb.get_siteGroups();

				ctrace.log("creating group: " + name);
				var spGroup = groupCollection.add(function () {
					var membersGRP = new SP.GroupCreationInformation();
					membersGRP.set_title(name);
					membersGRP.set_description(desc);
					return membersGRP;
				}());

				spGroup.set_onlyAllowMembersViewMembership(false);
				spGroup.update();
				ctx.load(spGroup);
				ctx.executeQueryAsync(function () {
					dfd.resolve(spGroup);
				}, function (r, a) {
					reqFailure(r, a, "createGroups", dfd);
				});
			}).promise();
		};
		var ensureCTypes = function (ctypes) {
			return ns.modules.funcs.processAsQueue(ctypes || [],
				function (ctype) {
					return ensureCtype(ctype.Name, ctype.FieldLinks);
				});
		};
		var createList = function (listTitle, templateType) {
			ctrace.log("Creating list " + listTitle);
			return $.Deferred(function (dfd) {

				var listCreationInfo = new SP.ListCreationInformation();
				listCreationInfo.set_title(listTitle);
				listCreationInfo.set_templateType(templateType);

				var oList = web.get_lists().add(listCreationInfo);

				ctx.load(oList);

				ctx.executeQueryAsync(function () {
					ctrace.log(args.ListTitle + " creation done");
					list = oList;
					handleOnCreated(list, dfd);
				}, function (r, a) {
					reqFailure(r, a, "createList", dfd);
				});
			}).promise();
		};
		var reqFailure = function (req, reqargs, from, dfd) {
			// log context failure

			var msg = from + "(list:" + args.ListTitle + ") : Request failed " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();
			ctrace.error(msg);

			if (dfd) dfd.reject(msg);
		};
		var ensureList = function (web, args) {
			return $.Deferred(function (dfd) {

				if (list != null) {
					var rootFolder = list.get_rootFolder();
					ctx.load(rootFolder, ["ServerRelativeUrl"]);
					ctx.loadSpElem(list).done(function () {
						ensureFields(list).done(function () {
							dfd.resolve(list);
						});
					});
				} else {

					lists = web.get_lists();

					var done = function done() {
						ctrace.log("lists loaded");
						listExists(lists, args.ListTitle).done(function (res) {
							if (res.exists) {
								ctrace.log("list already exists");
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
										return $.Deferred(function (dfdDefItems) {
											if (typeof args.DefaultItems == "function") {
												args.DefaultItems(spfields, me).done(function (items) {
													addItems(items, splist, spfields).done(function () {
														dfdDefItems.resolve();
													});
												});
											} else {
												addItems(args.DefaultItems, splist, spfields).done(function () {
													dfdDefItems.resolve();
												});
											}

										}).promise();
									};
									ctrace.log(args.ListTitle + ": creating fields");

									ensureFields(splist, args.Fields || []).done(function (spfields) {
										ensureCTypes(args.ContentTypes).done(function () {
											defaultItems(spfields).done(function () {
												if (args.Permissions) {
													breakRoleInheritance(false, true).done(function () {
														ctrace.log("done with inheritance");
														ns.modules.funcs.processAsQueue(args.Permissions, function (entry) {
															var groupName = entry.name;
															var perms = entry.permissions;
															ctrace.log("adding perm: " + groupName + " to " + args.ListTitle);
															return addPermission(groupName, perms, splist);
														}).done(function () {
															ctrace.log("done adding permissions");
															handleOnReady(splist, dfd);
														});
													});
												} else {
													handleOnReady(splist, dfd);
												}
											});

										});
									}).fail(function (err) {
										ctrace.log(err);
									});
								}).fail(function (err) {

									ctrace.log(err);
								});
							}
						});
					};

					ctrace.log("loading lists...");
					ctx.load(lists);

					ctx.executeQueryAsync(done, function (r, a) {
						reqFailure(r, a, "ensureList", dfd);
					});
				}
			}).promise();
		};
		var ensureFields = function (list, fields) {
			fields = fields || args.Fields || [];
			var spfields = list.get_fields();
			var loadFields = function () {
				return $.Deferred(function (dfd) {
					ctx.load(spfields, "Include(Title,FieldTypeKind,TypeAsString,InternalName)");
					ctx.executeQueryAsync(function () {
						ctrace.log("existing fields loaded");
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
				}).promise();
			};
			var getMarkup = function getMarkup(field) {
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
				var done = function done() {
					spfields = list.get_fields();

					ctx.load(spfields, "Include(Title,FieldTypeKind,TypeAsString,InternalName)");
					ctx.executeQueryAsync(function () {
						ctrace.log("existing fields loaded");
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
				loadFields().done(function (spFieldMap) {
					ns.modules.funcs.processAsQueue(fields, function (field) {
						return $.Deferred(function (fieldDfd) {
							getMarkup(field).done(function (xml) {

								var fieldXML = $($.parseXML(xml)).find("Field");
								var internalName = fieldXML.attr("DisplayName") || fieldXML.attr("InternalName");
								var spField = spFieldMap[internalName];
								if (spField) {
									ctrace.debug(internalName + " found");
								} else {
									ctrace.log("adding: " + xml);
									spField = spfields.addFieldAsXml(xml, true, SP.AddFieldOptions.defaultValue);
								}
								if (field.post) {
									field.post(spField);
								}
								ctx.load(spField);
								ctx.executeQueryAsync(function () {
									fieldDfd.resolve();
								}, function (r, a) {
									reqFailure(r, a, "ensureFields", fieldDfd);
								});
							});
						}).promise();
					}).done(done);

				});
			}).promise();
		};

		var deleteList = function (lists, listTitle) {
			ctrace.log("deleting list " + listTitle);
			return $.Deferred(function (dfd) {

				listExists(lists, listTitle).done(function (listexists) {

					if (listexists.exists) {
						listexists.list.deleteObject();
						ctx.executeQueryAsync(function () {
							dfd.resolve("list deleted");
						}, function (r, a) {
							reqFailure(r, a, "deleteList", dfd);
						});
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
				} else sptx.load(elem);

				sptx.executeQueryAsync(function () {
					dfd.resolve(elem);
				}, function (r, a) {
					reqFailure(r, a, caller || "loadSpElem", dfd);
				});
			}).promise();
		};
		var getlist = function () {
			return $.Deferred(function (dfd) {
				ensureList(web, args).done(function (list) {
					dfd.resolve(list, ctx, web);
				});
			}).promise();
		};
		var getitems = function (caml, folder, limit) {
			return $.Deferred(function (dfd) {
				//var rootFolder = list.get_rootFolder();
				var ctx = list.get_context();
				//var scripts = [];
				var queryXml = caml || args.DefaultQuery || "<View Scope='Recursive'>\
<ViewFields>\
<FieldRef Name='ID'></FieldRef>\
<FieldRef Name='Title'></FieldRef>\
</ViewFields><RowLimit>1000</RowLimit>\
</View>";
				//loadSpElem(rootFolder, ctx),
				$.when(getAllItemsPaged(queryXml, folder, limit)).done(function (items) {
					ctrace.log(items);
					if (args.itemParser) {
						dfd.resolve(args.itemParser(items), list, ctx);
					} else {
						dfd.resolve(items, list, ctx);
					}
				}).fail(function () {
					ctrace.error("getitems error");
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
		var getAllItemsPaged = function (caml, folder, limit) {

			limit = limit || 0;

			var dfd = $.Deferred();
			getlist().done(function (splist) {

				getAll(splist, ctx, caml, folder, limit).done(function (allItems) {
					dfd.resolve(allItems);
				});

			}).fail(function () { ctrace.error("error getAllPages"); });

			return dfd.promise();
		};

		/**
		 * For large lists, get items on individual folders, ** very slow **
		 * @param {SP.ListItem} tFolder
		 */
		var loadAllFilesFromAllFolders = function (caml) {

			var folderQueue = [list.get_rootFolder()];
			var allitems = [];

			return $.Deferred(function (alldfd) {
				ns.modules.funcs.processAsQueue(folderQueue, function (folder) {

					return $.Deferred(function (dfd) {

						ctx.load(folder, ["ServerRelativeUrl"]);
						loadSpElem(folder.get_folders()).done(function (folders) {
							spapi.collectionToArray(folders).forEach(function (n) {
								folderQueue.push(n);
							});

							var folderUrl = folder.get_serverRelativeUrl();
							caml = caml || "<View><RowLimit>1000</RowLimit></View>";

							getAllItemsPaged(caml, folderUrl).done(function (items) {

								for (var i = 0; i < items.length; i++) {

									var li = items[i];
									var vls = li.get_fieldValues();

									if (vls.FSObjType == "1") //folder
									{
										folderQueue.push(li);
									} else {
										allitems.push(li);
									}
								}

								dfd.resolve();
							});

						});
					}).promise();
				}).done(function () {
					alldfd.resolve(allitems);
				});

			}).promise();
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

					loadSpElem([wp, wpp, props]).done(function () /*res*/ {
						dfd.resolve(wp);
					});
				});
			});
		};

		var me = {
			loadAllFilesFromAllFolders: loadAllFilesFromAllFolders,
			addCustomAction: addCustomAction,
			args: args,
			deleteList: delTheList,
			addWebPart: addWebPart,
			getitems: function (caml /*string*/, force /*bool*/, limit, folder) {
				if (arguments.length == 1) {
					force = true;
				}
				if (force) {
					items = null;
				}
				return $.Deferred(function (dfd) {

					if (items) {
						dfd.resolve(items);
					} else {
						getlist().done(function () /*list*/ {
							getitems(caml, folder, limit).done(function (res) {
								items = res;
								dfd.resolve(items, list, ctx);
							});
						});
					}
				}).promise();
			},
			getitem: function getitem(id) {
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
			processAsQueue: ns.modules.funcs.processAsQueue,
			ensureFolder: ensureFolder,
			getItems: getAllItemsPaged,
			addItems: addItems,
			ctx: ctx,
			list: list,
			spErrorHandler: reqFailure,
			breakItemRoleInheritance: breakItemRoleInheritance,
			breakRoleInheritance: breakRoleInheritance,
			addContentType: addContentType,
			ensureCtype: ensureCtype
		};
		return me;
	};

	ns.modules.listapi = {
		getByTitle: getByTitle,
		runAllQuery: runAllQuery,
		getQuery: getQuery,
		getAll: getAll,
		getFields: getFields,
		Dal: spDal,
		version: "0.0.14"
	};

	var updateApi = function () {
		if (window.SP && SP.List) {
			SP.List.prototype.getAll = function () {
				var args = Array.prototype.slice.call(arguments);
				args.unshift(this.get_context());
				args.unshift(this);
				return getAll.apply(getAll, args);
			};
		}
	};

	updateApi();

	SP.SOD.executeOrDelayUntilScriptLoaded(function () {
		trace.debug("splist.loaded");
		updateApi();
	}, "sp.js");
	SP.SOD.executeFunc("sp.js", null, null);

})(spexplorerjs, spexplorerjs.modules.jQuery);