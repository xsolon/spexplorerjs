define("logger.api", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = (function () {
        function Logger(name) {
            this.shouldLog = true;
            this.shouldDebug = true;
            this.shouldTrace = true;
            this.name = name;
        }
        Logger.prototype.log = function (message) {
            this.shouldLog && console && console.log(message);
        };
        Logger.prototype.debug = function (message) {
            if (this.shouldDebug && console) {
                if (console.debug) {
                    console.debug(message);
                }
                else if (console.log) {
                    console.log(message);
                }
            }
        };
        Logger.prototype.trace = function (message) {
            this.shouldTrace && console && console.trace(message);
        };
        Logger.prototype.error = function (message) {
            console && console.error(message);
        };
        Logger.get = function (name) {
            return new Logger(name);
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
define("list.api", ["require", "exports", "logger.api", "meta.api", "utils.api", "jquery"], function (require, exports, logger_api_1, meta_api_1, utils_api_1, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    global['$'] = jQuery;
    var utils = new utils_api_1.funcs();
    var ListDal = (function () {
        function ListDal(title, defaultQuery) {
            if (defaultQuery === void 0) { defaultQuery = "<View/>"; }
            this.title = title;
            this.defaultQuery = defaultQuery;
            this.ctx = SP.ClientContext.get_current();
            this.list = this.ctx.get_web().get_lists().getByTitle(this.title);
            this.dal = new ListApi(this.ctx);
        }
        ListDal.prototype.ensureFolder = function (serverRelativeUrl) {
            return this.dal.folderApi.ensureFolderInList(serverRelativeUrl, this.list);
        };
        ListDal.prototype.getList = function () {
            return this.list;
        };
        ListDal.prototype.getItems = function (query, folder, limit) {
            if (query === void 0) { query = this.defaultQuery; }
            return this.dal.getAll(this.list, query, folder, limit);
        };
        ListDal.prototype.addItems = function (items, folderUrl, pageNum) {
            if (pageNum === void 0) { pageNum = 100; }
            return this.dal.addItems(items, this.list, folderUrl, pageNum);
        };
        ListDal.prototype.getItemById = function (id) {
            var li = this.list.getItemById(id);
            this.ctx.load(li);
            this.ctx.executeQueryAsync(function () {
                ddf.resolve(li);
            });
            var ddf = jQuery.Deferred();
            return ddf.promise();
        };
        return ListDal;
    }());
    exports.ListDal = ListDal;
    var ListApi = (function () {
        function ListApi(ctx) {
            this.ctrace = new logger_api_1.Logger('ListApi');
            this.ensureFields = function (list, fields) {
                var me = this;
                me.ctrace.debug('enureFields.begin');
                var spfields = list.get_fields();
                var loadFields = function () {
                    return $.Deferred(function (dfd) {
                        me.ctx.load(spfields, "Include(Title,FieldTypeKind,TypeAsString,InternalName)");
                        me.ctx.executeQueryAsync(function () {
                            var le = spfields.getEnumerator();
                            var parsed = {};
                            while (le.moveNext()) {
                                var field = le.get_current();
                                parsed[field.get_internalName()] = field;
                            }
                            dfd.resolve(parsed);
                            me.ctrace.log("existing fields loaded");
                        }, function onError(sender, args) {
                            debugger;
                            dfd.reject("Request failed " + args.get_message() + "\n" + args.get_stackTrace());
                        });
                    }).promise();
                };
                var getMarkup = function getMarkup(field, spfields) {
                    return $.Deferred(function (dfd) {
                        var xml = field.markup;
                        if (typeof field.markup == "function") {
                            var web = me.ctx.get_web();
                            var lists = web.get_lists();
                            field.markup(me.ctx, list, spfields, lists, web).done(function (xml) {
                                dfd.resolve(xml);
                            }).fail(function () {
                                debugger;
                            });
                        }
                        else {
                            dfd.resolve(xml);
                        }
                    }).promise();
                };
                return $.Deferred(function (dfd) {
                    var done = function done() {
                        me.ctrace.log('checking done');
                        spfields = list.get_fields();
                        loadFields().then(function (parsed) {
                            me.ctrace.log('custom fields ready');
                            dfd.resolve(parsed);
                        });
                    };
                    loadFields().then(function (spFieldMap) {
                        me.ctrace.log('checking fields');
                        utils.processAsQueue(fields.slice(), function (field) {
                            return $.Deferred(function (fieldDfd) {
                                me.ctrace.log("-- field: " + field.name);
                                getMarkup(field, spFieldMap).then(function (xml) {
                                    var fieldXML = $($.parseXML(xml)).find("Field");
                                    var internalName = fieldXML.attr("InternalName") || fieldXML.attr("Name") || fieldXML.attr("StaticName") || fieldXML.attr("DisplayName");
                                    var spField = spFieldMap[internalName];
                                    if (spField) {
                                        me.ctrace.debug(internalName + " found");
                                    }
                                    else {
                                        me.ctrace.log("adding: " + xml);
                                        spField = spfields.addFieldAsXml(xml, field.inDefaultView, field.addOptions || (SP.AddFieldOptions.addFieldInternalNameHint | SP.AddFieldOptions.addToAllContentTypes));
                                    }
                                    if (field.post) {
                                        field.post(spField);
                                    }
                                    me.ctx.load(spField);
                                    me.ctx.executeQueryAsync(function () {
                                        fieldDfd.resolve();
                                    }, function (r, a) {
                                        debugger;
                                    });
                                });
                            }).promise();
                        }).then(done);
                    });
                }).promise();
            };
            this.setupForms = function (tList, scriptLink, htmlLink) {
                var editForm = tList.get_forms().getByPageType(6);
                var dispForm = tList.get_forms().getByPageType(4);
                var newForm = tList.get_forms().getByPageType(8);
                var jslinkUrl = scriptLink;
                var ctx = this.ctx;
                var addWebPart = function (dfd) {
                    var xml = '<WebPart xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.microsoft.com/WebPart/v2">\
  <Title>Templates</Title><FrameType>None</FrameType><IsIncluded>true</IsIncluded><FrameState>Normal</FrameState>\
  <IsVisible>true</IsVisible>\
  <Assembly>Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>\
  <TypeName>Microsoft.SharePoint.WebPartPages.ContentEditorWebPart</TypeName>\
  <ContentLink xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor">htmlLink</ContentLink>\
</WebPart>'.replace(/htmlLink/g, htmlLink);
                    utils.addWebPart(ctx, dispForm.get_serverRelativeUrl(), xml, "FullPage", 3).done(function (wp1) {
                        utils.addWebPart(ctx, newForm.get_serverRelativeUrl(), xml, "FullPage", 3).done(function (wp1) {
                            utils.addWebPart(ctx, editForm.get_serverRelativeUrl(), xml, "FullPage", 3).done(function (wp1) {
                                dfd.resolve();
                            });
                        });
                    });
                };
                return $.Deferred(function (dfd) {
                    utils.loadSpElem([editForm, dispForm, newForm], ctx).done(function () {
                        utils.setformJsLink(newForm.get_serverRelativeUrl(), ctx, jslinkUrl).then(function () {
                            utils.setformJsLink(dispForm.get_serverRelativeUrl(), ctx, jslinkUrl).then(function () {
                                utils.setformJsLink(editForm.get_serverRelativeUrl(), ctx, jslinkUrl).then(function () {
                                    if (htmlLink) {
                                        addWebPart(dfd);
                                    }
                                    else {
                                        dfd.resolve();
                                    }
                                });
                            });
                        });
                    });
                }).promise();
            };
            this.ctx = ctx || SP.ClientContext.get_current();
            this.folderApi = new FolderApi(this.ctx);
        }
        ListApi.prototype.listExists = function (title) {
            var me = this;
            var lists = me.ctx.get_web().get_lists();
            me.ctx.load(lists, 'Include(Title)');
            return $.Deferred(function (dfd) {
                me.ctx.executeQueryAsync(function () {
                    var list = lists.get_data().find(function (i) { return i.get_title() == title; });
                    me.ctrace.debug(title + ".exists: " + (list != null));
                    dfd.resolve([list != null, list]);
                });
            }).promise();
        };
        ;
        ListApi.prototype.ensureCTypes = function (ctypes, splist) {
            var me = this;
            var ctx = me.ctx;
            var dfd = $.Deferred();
            if (!ctypes) {
                dfd.resolve();
            }
            else {
                var listCtypes = splist.get_contentTypes();
                var listFields = splist.get_fields();
                var webTypesCol = splist.get_parentWeb().get_availableContentTypes();
                splist.set_contentTypesEnabled(true);
                splist.update();
                ctx.load(webTypesCol);
                ctx.load(listFields);
                ctx.load(listCtypes);
                var webCtypesDic = null;
                var listCtypesDic = null;
                var listFieldsDic = null;
                var createCtype = function (ctypeMeta) {
                    var dfd1 = $.Deferred();
                    var parentCtype = null;
                    if (webCtypesDic[ctypeMeta.parentCtypeId])
                        parentCtype = webCtypesDic[ctypeMeta.parentCtypeId];
                    else
                        throw "Ctype " + ctypeMeta.parentCtypeId + " not found!";
                    ctx.load(parentCtype);
                    ctx.executeQueryAsync(function () {
                        me.ctrace.log(parentCtype.get_name());
                        var newContentType = new SP.ContentTypeCreationInformation();
                        newContentType.set_name(ctypeMeta.name);
                        if (ctypeMeta.group)
                            newContentType.set_group(ctypeMeta.group);
                        if (ctypeMeta.description)
                            newContentType.set_description(ctypeMeta.description);
                        newContentType.set_parentContentType(parentCtype);
                        var ctype = listCtypes.add(newContentType);
                        ctype.set_jsLink(ctypeMeta.jsLink);
                        ctype.update(false);
                        ctx.load(ctype);
                        ctx.load(listCtypes);
                        ctx.executeQueryAsync(function () {
                            dfd1.resolve(ctype);
                        }, function (s, e) {
                            me.ctrace.error(e.get_message());
                            debugger;
                        });
                    }, function (s, e) {
                        me.ctrace.error(e.get_message());
                        debugger;
                    });
                    return dfd1.promise();
                };
                var ensureFields = function (cType, meta) {
                    var dfd2 = $.Deferred();
                    var links = cType.get_fieldLinks();
                    ctx.load(links);
                    ctx.executeQueryAsync(function () {
                        var ctypeFieldLinks = utils.collectionToDictionary(links, function (field) { return field.get_name(); });
                        meta.fields.forEach(function (fieldMeta) {
                            if (!ctypeFieldLinks[fieldMeta.name]) {
                                me.ctrace.log("ctype " + meta.name + ": adding field link: " + fieldMeta.name);
                                var field = listFieldsDic[fieldMeta.name];
                                var newFieldLink = new SP.FieldLinkCreationInformation();
                                newFieldLink.set_field(field);
                                var fieldLink = links.add(newFieldLink);
                                if (fieldMeta.hidden != null)
                                    fieldLink.set_hidden(fieldMeta.hidden);
                            }
                        });
                        cType.update(false);
                        ctx.executeQueryAsync(function () {
                            dfd2.resolve();
                        }, function (s, e) {
                            me.ctrace.error(e.get_message());
                            debugger;
                        });
                    }, function (s, e) {
                        me.ctrace.error(e.get_message());
                        debugger;
                    });
                    return dfd2.promise();
                };
                var ensureCtype = function (ctype) {
                    var name = ctype.name;
                    var cDfd = $.Deferred();
                    var doCtype = function (spctype) {
                        if (ctype.description)
                            spctype.set_description(ctype.description);
                        if (ctype.group)
                            spctype.set_group(ctype.group);
                        if (ctype.jsLink)
                            spctype.set_jsLink(ctype.jsLink);
                        spctype.update(false);
                        ctx.executeQueryAsync(function () {
                            ensureFields(spctype, ctype).done(function () {
                                cDfd.resolve();
                            });
                        }, function (s, e) {
                            me.ctrace.error(e.get_message());
                            debugger;
                        });
                    };
                    if (!listCtypesDic[name]) {
                        createCtype(ctype).done(doCtype);
                    }
                    else {
                        doCtype(listCtypesDic[name]);
                    }
                    return cDfd.promise();
                };
                ctx.executeQueryAsync(function () {
                    listFieldsDic = utils.collectionToDictionary(listFields, function (field) { return field.get_internalName(); });
                    listCtypesDic = utils.collectionToDictionary(listCtypes, function (cType) { return cType.get_name(); });
                    webCtypesDic = utils.collectionToDictionary(webTypesCol, function (c) { return c.get_name(); });
                    utils.collectionToArray(webTypesCol).forEach(function (x) { listCtypesDic[x.get_stringId()] = x; });
                    utils.processAsQueue(ctypes, function (ctypeMeta) {
                        return ensureCtype(ctypeMeta);
                    }).done(function () {
                        dfd.resolve();
                    });
                });
            }
            return dfd.promise();
        };
        ;
        ListApi.prototype.ensureList = function (meta) {
            var me = this;
            var dfd = $.Deferred();
            var done = function (list, isNew) {
                var runUpdates = function () {
                    if (meta.listUpdates) {
                        meta.listUpdates(list, me).then(function () {
                            me.ctrace.debug('listUpdates.done');
                            if (isNew && meta.defaultItems) {
                                var addFunction = function (items) {
                                    me.addItems(items, list).done(function (spitems) {
                                        if (meta.afterDefaultItemsAdded) {
                                            meta.afterDefaultItemsAdded(list, me, spitems).done(function () { return dfd.resolve(); });
                                        }
                                        else {
                                            dfd.resolve();
                                        }
                                    });
                                };
                                if (Array.isArray(meta.defaultItems)) {
                                    addFunction(meta.defaultItems);
                                }
                                else {
                                    meta.defaultItems(list, me).done(function (items) {
                                        addFunction(items);
                                    });
                                }
                            }
                            else {
                                dfd.resolve(list);
                            }
                        });
                    }
                    else
                        dfd.resolve(list);
                    me.ctrace.debug('ensureList.done');
                };
                var promise = $.Deferred(function (dd) { dd.resolve(); }).promise();
                if (isNew && meta.afterListCreated) {
                    promise = meta.afterListCreated(list, me);
                }
                promise.done(function () {
                    runUpdates();
                }).catch(function () {
                    debugger;
                });
            };
            me.listExists(meta.title).then(function (res) {
                var exists = res[0];
                var existingList = res[1];
                var promise = $.Deferred(function (dd) { dd.resolve(existingList); }).promise();
                if (!exists) {
                    promise = me.createList(meta.title, meta.listTemplate, me.ctx.get_web());
                }
                promise.then(function (list) {
                    me.ensureFields(list, meta.fields).then(function () {
                        me.ensureCTypes(meta.ctypes, list).done(function () {
                            done(list, !exists);
                        }).catch(function () {
                            debugger;
                        });
                    }).catch(function () {
                        debugger;
                    });
                }).catch(function () {
                    debugger;
                });
            });
            return dfd.promise();
        };
        ;
        ListApi.prototype.createList = function (listTitle, templateType, web) {
            var me = this;
            me.ctrace.log("Creating list " + listTitle);
            return $.Deferred(function (dfd) {
                var listCreationInfo = new SP.ListCreationInformation();
                listCreationInfo.set_title(listTitle);
                listCreationInfo.set_templateType(templateType);
                var oList = web.get_lists().add(listCreationInfo);
                me.ctx.load(oList);
                me.ctx.executeQueryAsync(function () {
                    dfd.resolve(oList);
                }, function (r, a) {
                    debugger;
                });
            }).promise();
        };
        ;
        ListApi.prototype.getMeta = function (listTitle, fieldNames) {
            var me = this;
            var list = me.ctx.get_web().get_lists().getByTitle(listTitle);
            var fields = list.get_fields();
            me.ctx.load(list);
            me.ctx.load(fields);
            return $.Deferred(function (dfd) {
                me.ctx.executeQueryAsync(function () {
                    var meta = new meta_api_1.ListMeta(listTitle);
                    var spFields = utils.collectionToArray(fields);
                    var attribsToSkip = ['RowOrdinal', 'ID', 'ColName', 'StaticName', 'SourceID'];
                    spFields.forEach(function (f) {
                        var name = f.get_internalName();
                        if (fieldNames[name] != undefined) {
                            var xmlS = f.get_schemaXml();
                            var $xml = $.parseXML(xmlS);
                            var field = $xml.querySelector('Field');
                            attribsToSkip.forEach(function (n) { field.removeAttribute(n); });
                            xmlS = $('<x></x>').append($($xml).find('Field')).html().replace(/"/g, "'");
                            var display = f.get_title();
                            var fieldMeta = new meta_api_1.FieldMeta();
                            fieldMeta.markup = xmlS;
                            fieldMeta.name = name;
                            fieldMeta.legacyName = name;
                            fieldMeta.title = display;
                            meta.fields.push(fieldMeta);
                        }
                    });
                    dfd.resolve(meta);
                });
            }).promise();
        };
        ;
        ListApi.prototype.addItems = function (gitems, splist, folderUrl, pageNum) {
            if (pageNum === void 0) { pageNum = 100; }
            var me = this;
            var prepLookupValue = function (raw) {
                var val = null;
                if (raw == null || SP.User.isInstanceOfType(raw) || SP.FieldLookupValue.isInstanceOfType(raw)) {
                    val = raw;
                }
                else if (Array.isArray(raw)) {
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
            var fields = splist.get_fields();
            me.ctx.load(fields);
            me.ctx.executeQueryAsync(function () {
                var fieldMap = utils.collectionToDictionary(fields, function (f) { return f.get_internalName(); });
                if (gitems && gitems.length > 0) {
                    me.ctrace.log('starting addItems');
                    var spItems = [];
                    var insertItems = function (items) {
                        var iDfd = $.Deferred();
                        try {
                            items.forEach(function (data) {
                                var copy = JSON.parse(JSON.stringify(data));
                                var itemCreateInfo = new SP.ListItemCreationInformation();
                                if (folderUrl) {
                                    itemCreateInfo.set_folderUrl(folderUrl);
                                }
                                var newspitem = splist.addItem(itemCreateInfo);
                                for (var f in data) {
                                    if (!fieldMap[f])
                                        continue;
                                    var fieldType = fieldMap[f].get_typeAsString();
                                    var val = null;
                                    if (fieldType === "URL") {
                                        val = new SP.FieldUrlValue();
                                        val.set_url(data[f]);
                                    }
                                    else if (fieldType.search("Lookup") === 0) {
                                        var itemVal = data[f];
                                        val = prepLookupValue(itemVal);
                                    }
                                    else {
                                        val = data[f];
                                    }
                                    newspitem.set_item(f, val);
                                }
                                newspitem.update();
                                me.ctx.load(newspitem);
                                spItems.push(newspitem);
                                newspitem['additemsource'] = copy;
                            });
                        }
                        catch (e) {
                            me.ctrace.error(e);
                            debugger;
                            iDfd.reject(gitems);
                        }
                        me.ctx.executeQueryAsync(function () {
                            me.ctrace.log("page done");
                            iDfd.resolve();
                        }, function (r, a) {
                            debugger;
                            iDfd.reject(gitems);
                        });
                        return iDfd.promise();
                    };
                    var pagedItems = utils.pageArray(gitems, pageNum);
                    utils.processAsQueue(pagedItems, insertItems).done(function () {
                        me.ctrace.log('add items done');
                        dfd.resolve(spItems);
                    });
                }
                else {
                    dfd.resolve();
                }
            });
            var dfd = $.Deferred();
            return dfd.promise();
        };
        ;
        ListApi.prototype.getQuery = function (caml, folder) {
            var query = new SP.CamlQuery();
            caml = caml || "<View Scope='Recursive'>\
		<ViewFields><FieldRef Name='ID'></FieldRef>\
		</ViewFields><RowLimit>1000</RowLimit>\
</View>";
            if (folder) {
                query.set_folderServerRelativeUrl(folder);
            }
            query.set_viewXml(caml);
            return query;
        };
        ;
        ListApi.prototype.runAllQuery = function (query, splist, limit, trace) {
            if (limit === void 0) { limit = 0; }
            if (trace === void 0) { trace = this.ctrace; }
            var me = this;
            var spctx = me.ctx;
            var items = [], spItems;
            var parseRows = function (currrentItems) {
                var itemsCount = currrentItems.get_count();
                for (var i = 0; i < itemsCount; i++) {
                    var item = currrentItems.itemAt(i);
                    if (item) {
                        items.push(item);
                    }
                }
            };
            var loadNext = function (pageInfo) {
                trace.debug("page: " + pageInfo);
                pageInfo = pageInfo || "";
                var pos = new SP.ListItemCollectionPosition();
                pos.set_pagingInfo(pageInfo);
                query.set_listItemCollectionPosition(pos);
                spItems = splist.getItems(query);
                spctx.load(spItems);
                var onSuccess = function () {
                    parseRows(spItems);
                    var position = spItems.get_listItemCollectionPosition();
                    if (position !== null && (limit === 0 || items.length < limit)) {
                        var info = position.get_pagingInfo();
                        loadNext(info);
                    }
                    else {
                        dfd.resolve(items, splist, spctx);
                    }
                };
                spctx.executeQueryAsync(onSuccess, function (sender, error) {
                    trace.error(error.get_message());
                    dfd.reject(sender, error);
                });
            };
            loadNext();
            var dfd = $.Deferred();
            return dfd.promise();
        };
        ;
        ListApi.prototype.getAll = function (splist, caml, folder, limit) {
            if (limit === void 0) { limit = 0; }
            var query = this.getQuery(caml, folder);
            return this.runAllQuery(query, splist, limit);
        };
        ;
        return ListApi;
    }());
    exports.ListApi = ListApi;
    var FolderApi = (function () {
        function FolderApi(ctx) {
            this.ctrace = new logger_api_1.Logger('FolderApi');
            this.createFolderInList = function (name, parentFolderPath, list) {
                var ctx = this.ctx;
                list.set_enableFolderCreation(true);
                list.update();
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
                    dfd.reject([r, a]);
                });
                return dfd.promise();
            };
            this.ctx = ctx || SP.ClientContext.get_current();
        }
        FolderApi.prototype.ensureAttachmentFolder = function (itemId, list) {
            var id = itemId.toString();
            var dfd = $.Deferred();
            var me = this;
            var ctx = me.ctx;
            var rootFolder = list.get_rootFolder();
            ctx.load(rootFolder);
            ctx.executeQueryAsync(function () {
                var url = rootFolder.get_serverRelativeUrl() + "/Attachments";
                me.folderExists(url + "/" + id).done(function (existingFolder) {
                    if (SP.Folder.isInstanceOfType(existingFolder)) {
                        dfd.resolve(existingFolder);
                    }
                    else {
                        var attRootF = list.get_parentWeb().getFolderByServerRelativeUrl(url);
                        var attachmentsFolder = attRootF.get_folders().add('_' + id);
                        attachmentsFolder.moveTo(url + '/' + id);
                        ctx.load(attachmentsFolder);
                        ctx.executeQueryAsync(function () {
                            dfd.resolve(attachmentsFolder);
                        }, function (s, e) {
                            debugger;
                        });
                    }
                });
            }, function () {
                debugger;
            });
            return dfd.promise();
        };
        FolderApi.prototype.folderExists = function (serverRelativeUrl, web) {
            var trace = this.ctrace;
            var ctx = this.ctx;
            if (!web) {
                web = ctx.get_web();
            }
            var dfd = $.Deferred();
            var folder = web.getFolderByServerRelativeUrl(serverRelativeUrl);
            trace.debug("probing for folder " + serverRelativeUrl);
            ctx.load(folder, "Name", "ServerRelativeUrl");
            ctx.executeQueryAsync(function () {
                try {
                    var url = folder.get_serverRelativeUrl();
                    trace.debug("folder exists:" + url);
                    dfd.resolve(folder);
                }
                catch (e) {
                    trace.debug("Folder does not exist.");
                    dfd.resolve(false);
                }
            }, function (s, args) {
                if (args.get_errorTypeName() === "System.IO.FileNotFoundException") {
                    trace.debug("Folder does not exist.");
                    dfd.resolve(false);
                }
                else {
                    trace.debug("Error: " + args.get_message());
                    dfd.resolve(false);
                }
            });
            return dfd.promise();
        };
        ;
        FolderApi.prototype.pathSteps = function (path) {
            var bits = path.split("/");
            var qu = [];
            for (var i = bits.length; i > 0; i--) {
                var current = bits.slice(0, i).join("/");
                if (current === "")
                    current = "/";
                qu.push(current);
            }
            return qu;
        };
        ;
        FolderApi.prototype.ensureFolderInList = function (serverRelativeUrl, list) {
            var me = this;
            var dfd = $.Deferred();
            me.folderExists(serverRelativeUrl, list.get_parentWeb()).done(function (folder) {
                if (folder === false) {
                    var parentFolders = me.pathSteps(serverRelativeUrl);
                    var parentFolderPath = parentFolders[1];
                    var bits = serverRelativeUrl.split("/");
                    var name = bits[bits.length - 1];
                    me.ensureFolderInList(parentFolderPath, list).done(function () {
                        me.createFolderInList(name, parentFolderPath, list).done(function (folder) {
                            dfd.resolve(folder);
                        });
                    });
                }
                else {
                    dfd.resolve(folder);
                }
            });
            return dfd.promise();
        };
        ;
        FolderApi.prototype.uploadFile = function (parentDir, buffer, filename, replaceInvalidChars, createInfo) {
            if (replaceInvalidChars === void 0) { replaceInvalidChars = true; }
            var me = this;
            var ctx = me.ctx;
            var trace = me.ctrace;
            var p = $.Deferred();
            if (!createInfo) {
                var createInfo = new SP.FileCreationInformation();
                createInfo.set_overwrite(true);
            }
            createInfo.set_content(buffer);
            var fileName = filename;
            if (replaceInvalidChars)
                fileName = fileName.replace(/[#%\*:<>?\/|]/g, "");
            createInfo.set_url(fileName);
            var uploadedDocument = parentDir.get_files().add(createInfo);
            ctx.load(uploadedDocument);
            ctx.executeQueryAsync(function () {
                p.resolve(uploadedDocument);
            }, function (s, e) {
                trace.error(e.get_message());
                p.reject(e);
            });
            return p.promise();
        };
        ;
        return FolderApi;
    }());
    exports.FolderApi = FolderApi;
    var WebApi = (function () {
        function WebApi(ctx) {
            this.ctrace = new logger_api_1.Logger('WebApi');
            this.ctx = ctx;
        }
        WebApi.prototype.ensureCTypes = function (ctypes, web) {
            if (web === void 0) { web = null; }
            var me = this;
            var ctx = me.ctx;
            if (web == null)
                web = ctx.get_web();
            var dfd = $.Deferred();
            if (!ctypes) {
                dfd.resolve();
            }
            else {
                var fieldsCol = web.get_availableFields();
                var webTypesCol = web.get_availableContentTypes();
                ctx.load(webTypesCol);
                ctx.load(fieldsCol);
                var ctypesDic = null;
                var fieldsDic = null;
                var createCtype = function (ctypeMeta) {
                    var dfd1 = $.Deferred();
                    var parentCtype = null;
                    if (ctypesDic[ctypeMeta.parentCtypeId])
                        parentCtype = ctypesDic[ctypeMeta.parentCtypeId];
                    ctx.load(parentCtype);
                    ctx.executeQueryAsync(function () {
                        me.ctrace.log(parentCtype.get_name());
                        var newContentType = new SP.ContentTypeCreationInformation();
                        newContentType.set_name(ctypeMeta.name);
                        if (ctypeMeta.group)
                            newContentType.set_group(ctypeMeta.group);
                        if (ctypeMeta.description)
                            newContentType.set_description(ctypeMeta.description);
                        newContentType.set_parentContentType(parentCtype);
                        var ctype = web.get_contentTypes().add(newContentType);
                        ctype.set_jsLink(ctypeMeta.jsLink);
                        ctype.update(false);
                        ctx.load(ctype);
                        ctx.executeQueryAsync(function () {
                            dfd1.resolve(ctype);
                        }, function (s, e) {
                            me.ctrace.error(e.get_message());
                            debugger;
                        });
                    }, function (s, e) {
                        me.ctrace.error(e.get_message());
                        debugger;
                    });
                    return dfd1.promise();
                };
                var ensureFields = function (cType, meta) {
                    var dfd2 = $.Deferred();
                    var links = cType.get_fieldLinks();
                    ctx.load(links);
                    ctx.executeQueryAsync(function () {
                        var ctypeFieldLinks = utils.collectionToDictionary(links, function (field) { return field.get_name(); });
                        meta.fields.forEach(function (fieldMeta) {
                            if (!ctypeFieldLinks[fieldMeta.name]) {
                                me.ctrace.log("ctype " + meta.name + ": adding field link: " + fieldMeta.name);
                                var field = fieldsDic[fieldMeta.name];
                                var newFieldLink = new SP.FieldLinkCreationInformation();
                                newFieldLink.set_field(field);
                                var fieldLink = links.add(newFieldLink);
                                if (fieldMeta.hidden != null)
                                    fieldLink.set_hidden(fieldMeta.hidden);
                            }
                        });
                        cType.update(false);
                        ctx.executeQueryAsync(function () {
                            dfd2.resolve();
                        }, function (s, e) {
                            me.ctrace.error(e.get_message());
                            debugger;
                        });
                    }, function (s, e) {
                        me.ctrace.error(e.get_message());
                        debugger;
                    });
                    return dfd2.promise();
                };
                var ensureCtype = function (ctype) {
                    var name = ctype.name;
                    var cDfd = $.Deferred();
                    var doCtype = function (spctype) {
                        if (ctype.description)
                            spctype.set_description(ctype.description);
                        if (ctype.group)
                            spctype.set_group(ctype.group);
                        if (ctype.jsLink)
                            spctype.set_jsLink(ctype.jsLink);
                        spctype.update(false);
                        ctx.executeQueryAsync(function () {
                            ensureFields(spctype, ctype).done(function () {
                                cDfd.resolve();
                            });
                        }, function (s, e) {
                            me.ctrace.error(e.get_message());
                            debugger;
                        });
                    };
                    if (!ctypesDic[name]) {
                        createCtype(ctype).done(doCtype);
                    }
                    else {
                        doCtype(ctypesDic[name]);
                    }
                    return cDfd.promise();
                };
                ctx.executeQueryAsync(function () {
                    fieldsDic = utils.collectionToDictionary(fieldsCol, function (field) { return field.get_internalName(); });
                    ctypesDic = utils.collectionToDictionary(webTypesCol, function (cType) { return cType.get_name(); });
                    utils.collectionToArray(webTypesCol).forEach(function (x) {
                        ctypesDic[x.get_stringId()] = x;
                    });
                    utils.processAsQueue(ctypes, function (ctypeMeta) {
                        return ensureCtype(ctypeMeta);
                    }).done(function () {
                        dfd.resolve();
                    });
                });
            }
            return dfd.promise();
        };
        ;
        WebApi.GetApi = function (ctx) {
            return new WebApi(ctx);
        };
        return WebApi;
    }());
    exports.WebApi = WebApi;
});
define("meta.api", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListMeta = (function () {
        function ListMeta(title) {
            this.title = title;
            this.fields = [];
            this.defaultItems = [];
        }
        return ListMeta;
    }());
    exports.ListMeta = ListMeta;
    var GroupMeta = (function () {
        function GroupMeta() {
            this.desc = '';
        }
        return GroupMeta;
    }());
    exports.GroupMeta = GroupMeta;
    var FieldMeta = (function () {
        function FieldMeta() {
            this.flags = 0;
            this.multiValue = false;
            this.inDefaultView = false;
            this.addOptions = SP.AddFieldOptions.addFieldInternalNameHint | SP.AddFieldOptions.addToAllContentTypes;
        }
        return FieldMeta;
    }());
    exports.FieldMeta = FieldMeta;
    var FieldLinkMeta = (function () {
        function FieldLinkMeta() {
            this.hidden = null;
        }
        return FieldLinkMeta;
    }());
    exports.FieldLinkMeta = FieldLinkMeta;
    var CTypeMeta = (function () {
        function CTypeMeta() {
        }
        return CTypeMeta;
    }());
    exports.CTypeMeta = CTypeMeta;
    exports.classBuilder = function (list) {
        var fieldStr = "";
        list.fields.forEach(function (field) {
            fieldStr += "public static " + field.name + " : string = \"" + field.name + "\";\n";
        });
        var template = "export class " + list.title + "Def {\n\t" + fieldStr + "\n}";
        return template;
    };
    exports.tsClassBuilder = function (list) {
        var ctypes = JSON.parse(JSON.stringify(list.ctypes || []));
        if (ctypes.length == 0) {
            ctypes.push({
                name: '',
                fields: list.fields,
            });
        }
        var fields = {};
        list.fields.forEach(function (f) {
            var sType = "string";
            if (f.type == SP.FieldType.user) {
                sType = 'SP.FieldUserValue';
            }
            else if (f.type == SP.FieldType.lookup) {
                sType = 'SP.FieldLookupValue';
            }
            else if (f.type == SP.FieldType.boolean) {
                sType = 'boolean';
            }
            else if (f.type == SP.FieldType.dateTime) {
                sType = 'Date';
            }
            if (f.multiValue) {
                sType += '[]';
            }
            var tmp = f.name + "(val?: " + sType + "): " + sType + " {\n    var me = this;\n    if (arguments.length) {\n      me.li.set_item('" + f.name + "', val);\n    }\n    var res: " + sType + " = me.li.get_item('" + f.name + "');\n    return res;\n  }\n\n";
            fields[f.name] = tmp;
        });
        var res = '/// <reference types="sharepoint" />';
        ctypes.forEach(function (c) {
            var ctypeFields = [];
            c.fields.forEach(function (f) {
                ctypeFields.push(fields[f.name]);
            });
            var className = "" + list.title.replace(/ /g, '') + c.name.replace(/ /g, '') + "Type";
            res += "\nexport class " + className + " {\n  li: SP.ListItem;\n  constructor(li?: SP.ListItem) {\n    if (li)\n      this.li = li;\n  }\n  spitem(li?: SP.ListItem): SP.ListItem {\n    if (li)\n      this.li = li;\n    return this.li;\n  }\n  id(val?: number): number{\n    var me = this;\n    if (arguments.length) {\n      me.li.set_item('ID', val);\n    }\n    var res: number = me.li.get_item('ID');\n    return res;\n  }\n  title (val?: string): string {\n    var me = this;\n    if (arguments.length) {\n      me.li.set_item('Title', val);\n    }\n    var res: string = me.li.get_item('Title');\n    return res;\n  }\n  FileLeafRef(): string {\n    var me = this;\n    var res: string = me.li.get_item('FileLeafRef');\n    return res;\n  }\n  FileRef(): string {\n    var me = this;\n    var res: string = me.li.get_item('FileRef');\n    return res;\n  }\n  FileDirRef(): string {\n    var me = this;\n    var res: string = me.li.get_item('FileDirRef');\n    return res;\n  }\n  " + ctypeFields.join(' ') + "\n  public static FromArray(spArray: SP.ListItem[]): Array<" + className + "> {\n    var result = [];\n    (spArray || []).forEach((li) => {\n        result.push(new " + className + "(li));\n    });\n    return result;\n  };\n  public static FromCollection(spCollection: SP.ListItemCollection): Array<" + className + "> {\n    var result = [];\n    if (spCollection) {\n      var le = spCollection.getEnumerator();\n      while (le.moveNext()) {\n        var li = le.get_current();\n        result.push(new " + className + "(li));\n      }\n    }\n    return result;\n  };\n}\n";
        });
        return res;
    };
});
define("utils.api", ["require", "exports", "logger.api"], function (require, exports, logger_api_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultLogger = new logger_api_2.Logger('Utils');
    var reqFailure = function (req, reqargs, dfd, logger) {
        if (logger === void 0) { logger = defaultLogger; }
        try {
            var msg = " Request failed: " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();
            logger.error(msg);
        }
        catch (e) {
            debugger;
        }
        if (dfd)
            dfd.reject(msg);
    };
    exports.version = '0.1.8';
    var pagewps = (function () {
        function pagewps() {
        }
        return pagewps;
    }());
    exports.pagewps = pagewps;
    ;
    var funcs = (function () {
        function funcs() {
            this.getParameterByName = function (name, url) {
                if (!url)
                    url = window.location.href;
                name = name.replace(/[[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
                if (!results)
                    return null;
                if (!results[2])
                    return "";
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            };
            this.getPeoplePickerByName = function (name) {
                var field = null;
                for (var a in SPClientPeoplePicker.SPClientPeoplePickerDict) {
                    if (a.search(name) > -1) {
                        field = SPClientPeoplePicker.SPClientPeoplePickerDict[a];
                        break;
                    }
                }
                return field;
            };
            this.collectionToArray = function (spCollection) {
                var result = [];
                if (spCollection) {
                    var le = spCollection.getEnumerator();
                    while (le.moveNext()) {
                        var li = le.get_current();
                        result.push(li);
                    }
                }
                return result;
            };
            this.processAsQueue = function (arr, action) {
                var doNext = function (dfd) {
                    if (arr == null) {
                        dfd.resolve();
                    }
                    else if (Array.isArray(arr)) {
                        if (arr.length === 0) {
                            dfd.resolve();
                        }
                        else {
                            var item = arr.shift();
                            action(item).then(function () {
                                doNext(dfd);
                            });
                        }
                    }
                };
                return $.Deferred(function (dfd) {
                    if (Array.isArray(arr)) {
                        doNext(dfd);
                    }
                    else {
                        var pr = arr;
                        pr().then(function (items) {
                            arr = items;
                            doNext(dfd);
                        });
                    }
                }).promise();
            };
            this.setHomePage = function (folderOrWeb, url, logger) {
                if (logger === void 0) { logger = defaultLogger; }
                var ctx = folderOrWeb.get_context();
                var folder = folderOrWeb;
                if (folderOrWeb) {
                    folder = folderOrWeb.get_rootFolder();
                }
                logger.debug("Setting default page: " + url);
                folder.set_welcomePage(url);
                folder.update();
                return $.Deferred(function (dfd) {
                    ctx.executeQueryAsync(function () {
                        dfd.resolve();
                    });
                }).promise();
            };
            this.addWebPart = function (ctx, serverRelativeFormUrl, wpXml, zone, position) {
                if (position === void 0) { position = 0; }
                var mee = this;
                return $.Deferred(function (dfd) {
                    var web = ctx.get_web();
                    var oFile = web.getFileByServerRelativeUrl(serverRelativeFormUrl);
                    var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                    var oWebPartDefinition = lpm.importWebPart(wpXml);
                    var oWebPart = oWebPartDefinition.get_webPart();
                    var wp = lpm.addWebPart(oWebPart, zone || "LeftColumn", position || 0);
                    var wps = lpm.get_webParts();
                    ctx.load(wps, "Include(WebPart.Title)");
                    mee.loadSpElem([oWebPart, wp], ctx, "Add web part").done(function () {
                        wp = wps.getById(wp.get_id());
                        var wpp = wp.get_webPart();
                        var props = wpp.get_properties();
                        mee.loadSpElem([wp, wpp, props], ctx).done(function () {
                            dfd.resolve(wp);
                        }).fail(function (e) { dfd.reject(e); });
                    }).fail(function (e) { dfd.reject(e); });
                }).promise();
            };
            this.setformJsLink = function (formUrl, ctx, bizJs) {
                return $.Deferred(function (jslinkdfd) {
                    var web = ctx.get_web();
                    var oFile = web.getFileByServerRelativeUrl(formUrl);
                    var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                    var wps = lpm.get_webParts();
                    ctx.load(wps, "Include(WebPart.Title)");
                    ctx.executeQueryAsync(function () {
                        var wp = wps.get_item(0);
                        var wpp = wp.get_webPart();
                        var props = wpp.get_properties();
                        ctx.load(wp);
                        ctx.load(wpp);
                        ctx.load(props);
                        ctx.executeQueryAsync(function () {
                            props.set_item("JSLink", bizJs);
                            wp.saveWebPartChanges();
                            ctx.executeQueryAsync(function () {
                                jslinkdfd.resolve();
                            });
                        }, function () { });
                    }, function () { });
                }).promise();
            };
            this.breakRoleInheritance = function (securable, copyRoleAssignments, clearSubscopes) {
                securable.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
                securable.any && securable.update();
                var ctx = securable.get_context();
                return this.loadSpElem(securable, ctx);
            };
            this.addPermission = function (ctx, principalIn, permissions, securable, parentWeb, logger) {
                if (logger === void 0) { logger = defaultLogger; }
                var me = this;
                return $.Deferred(function (dfd) {
                    parentWeb = parentWeb || securable;
                    var safePrincipal = principalIn;
                    var safeAddPermission = function safeAddPermission(principal) {
                        var collContribute = SP.RoleDefinitionBindingCollection.newObject(ctx);
                        for (var i = 0; i < permissions.length; i++) {
                            var perm = permissions[i];
                            logger.log("adding Permissions " + perm);
                            var rdContribute = parentWeb.get_roleDefinitions().getByName(perm);
                            collContribute.add(rdContribute);
                        }
                        var assignments = securable.get_roleAssignments();
                        assignments.add(principal, collContribute);
                        ctx.load(principal);
                        ctx.executeQueryAsync(function () {
                            dfd.resolve(principal);
                        }, function (r, a) {
                            reqFailure(r, a, dfd);
                        });
                    };
                    if (SP.Group.isInstanceOfType(principalIn)) {
                        safeAddPermission(safePrincipal);
                    }
                    else {
                        me.ensureGroup(principalIn).done(function (res) {
                            safePrincipal = res;
                            safeAddPermission(safePrincipal);
                        });
                    }
                }).promise();
            };
            this.getFieldMap = function () {
                var res = {};
                $("td.ms-formbody").each(function () {
                    var html = $(this).html().replace(/\n/g, "");
                    if (html.indexOf("FieldInternalName=\"") < 0)
                        return;
                    var start = html.indexOf("FieldInternalName=\"") + "FieldInternalName=\"".length;
                    html = html.substring(start);
                    var stopp = html.indexOf("\"");
                    var nm = html.substring(0, stopp);
                    res[nm] = this.parentNode;
                });
                return res;
            };
        }
        funcs.prototype.pageArray = function (array, pageNum) {
            if (pageNum === void 0) { pageNum = 10; }
            if (pageNum < 0)
                pageNum = 10;
            var res = [];
            var pos = -1;
            array.forEach(function (n, i) {
                if (res.length == 0 || res[pos].length == pageNum) {
                    res.push([n]);
                    pos++;
                }
                else {
                    res[pos].push(n);
                }
            });
            return res;
        };
        funcs.prototype.arrayToDictionary = function (array, getKey, forceUnique) {
            if (forceUnique === void 0) { forceUnique = false; }
            var dic = {};
            for (var i = 0; i < array.length; i++) {
                var element = array[i];
                var key = getKey(element);
                if (forceUnique && dic[key]) {
                    throw key + " already in dictionary";
                }
                else
                    dic[key] = element;
            }
            return dic;
        };
        ;
        funcs.prototype.collectionToDictionary = function (spCollection, getKey, forceUnique) {
            if (forceUnique === void 0) { forceUnique = false; }
            var arr = this.collectionToArray(spCollection);
            var dic = this.arrayToDictionary(arr, getKey, forceUnique);
            return dic;
        };
        ;
        funcs.prototype.loadSpElem = function (elem, sptx, caller) {
            sptx = sptx || (elem.get_context && elem.get_context()) || (elem.length && elem[0].get_context && elem[0].get_context());
            if (!sptx)
                throw "client context undefined";
            return $.Deferred(function (dfd) {
                if (elem.length) {
                    for (var i = 0; i < elem.length; i++) {
                        sptx.load(elem[i]);
                    }
                }
                else
                    sptx.load(elem);
                sptx.executeQueryAsync(function () {
                    dfd.resolve(elem, sptx);
                }, function (r, a) {
                    reqFailure(r, a, dfd);
                });
            }).promise();
        };
        ;
        funcs.prototype.removeScriptLink = function (ctx, title, logger) {
            if (logger === void 0) { logger = defaultLogger; }
            var mee = this;
            logger.debug("removeScriptLink: title:" + title);
            return $.Deferred(function (dfd) {
                var web = ctx.get_web();
                var actions = web.get_userCustomActions();
                mee.loadSpElem(actions, ctx).done(function () {
                    var actionArray = mee.collectionToArray(actions);
                    var existing = $.grep(actionArray, function (n) { return title === n.get_title(); });
                    var action = null;
                    if (existing.length === 0) {
                        logger.log("scriptlink " + title + " not found");
                        action = actions.add();
                    }
                    else {
                        logger.debug("removing scriptlink: title:" + title);
                        action = existing[0];
                        action.deleteObject();
                        ctx.executeQueryAsync(function () {
                            dfd.resolve();
                        }, function () {
                            dfd.resolve();
                            debugger;
                        });
                    }
                });
            });
        };
        ;
        funcs.prototype.addScriptLink = function (ctx, src, title, sequence, logger) {
            if (sequence === void 0) { sequence = 100; }
            if (logger === void 0) { logger = defaultLogger; }
            var mee = this;
            logger.debug("addScriptLink: title:" + title + " src:" + src);
            return $.Deferred(function (dfd) {
                var web = ctx.get_web();
                var actions = web.get_userCustomActions();
                mee.loadSpElem(actions, ctx).done(function () {
                    var actionArray = mee.collectionToArray(actions);
                    var existing = $.grep(actionArray, function (n) { return title === n.get_title(); });
                    var action = null;
                    if (existing.length === 0) {
                        logger.log("adding ScriptLink " + src);
                        action = actions.add();
                    }
                    else {
                        logger.debug("addScriptLink: title:" + title + " found");
                        action = existing[0];
                    }
                    action.set_sequence(sequence);
                    action.set_location("ScriptLink");
                    action.set_title(title);
                    action.set_scriptSrc(src);
                    action.update();
                    mee.loadSpElem(action, ctx).done(function () {
                        dfd.resolve();
                    }).fail(function () {
                        logger.error('addScriptLink.error');
                    });
                });
            }).promise();
        };
        ;
        funcs.prototype.getPageWebParts = function (formUrl, ctx) {
            var result = {
                ctx: ctx, wps: {}, lpm: null
            };
            var me = this;
            var web = ctx.get_web();
            var oFile = web.getFileByServerRelativeUrl(formUrl);
            var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
            result.lpm = lpm;
            var wps = lpm.get_webParts();
            ctx.load(wps);
            ctx.executeQueryAsync(function () {
                var wpps = me.collectionToArray(wps);
                wpps.forEach(function (wpd) {
                    var wp = wpd.get_webPart();
                    var id = wpd.get_id().toString();
                    result.wps[id] = { wpd: wpd, wp: wp };
                    ctx.load(wpd);
                    ctx.load(wp);
                    ctx.load(wp.get_properties());
                });
                ctx.executeQueryAsync(function () {
                    dfd.resolve(result);
                }, function () { debugger; });
            }, function () { debugger; });
            var dfd = $.Deferred();
            return dfd.promise();
        };
        ;
        funcs.prototype.getGroups = function (ctx, logger) {
            if (logger === void 0) { logger = defaultLogger; }
            var dfd = $.Deferred();
            var me = this;
            var web = ctx.get_web();
            var groupCollection = web.get_siteGroups();
            me.loadSpElem(groupCollection, ctx, 'getGroups').done(function () {
                logger.log("Loaded Groups: " + groupCollection.get_count());
                var groups = me.collectionToDictionary(groupCollection, function (g) { return g.get_title(); });
                dfd.resolve(groups);
            });
            return dfd.promise();
        };
        ;
        funcs.prototype.ensureGroup = function (name, desc, ctx, logger) {
            if (logger === void 0) { logger = defaultLogger; }
            var me = this;
            return $.Deferred(function (dfd) {
                me.getGroups(ctx, logger).done(function (spGroups) {
                    if (spGroups[name]) {
                        dfd.resolve(spGroups[name]);
                    }
                    else {
                        me.createGroup(name, desc, ctx, ctx.get_web(), logger).done(function (group) {
                            dfd.resolve(group);
                        });
                    }
                });
            }).promise();
        };
        ;
        funcs.prototype.ensureGroups = function (groups, ctx, securable, logger) {
            if (logger === void 0) { logger = defaultLogger; }
            var me = this;
            securable = securable || ctx.get_web();
            return $.Deferred(function (dfdG) {
                me.getGroups(ctx, logger).done(function () {
                    me.processAsQueue(groups, function (group) {
                        return $.Deferred(function (dfd) {
                            me.ensureGroup(group.name, group.desc, ctx, logger).done(function (spGroup) {
                                logger.log("Adding permissions for " + group.name);
                                me.addPermission(ctx, spGroup, group.permissions, securable, ctx.get_web(), logger).done(function () {
                                    logger.log("adding pemission is done");
                                    dfd.resolve();
                                });
                            });
                        }).promise();
                    }).done(function () {
                        dfdG.resolve();
                    });
                });
            }).promise();
        };
        ;
        funcs.prototype.createGroup = function (name, desc, ctx, parentWeb, logger) {
            if (logger === void 0) { logger = defaultLogger; }
            parentWeb = parentWeb || ctx.get_web();
            return $.Deferred(function (dfd) {
                var groupCollection = parentWeb.get_siteGroups();
                logger.log("creating group: " + name);
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
                    reqFailure(r, a, dfd);
                });
            }).promise();
        };
        ;
        funcs.prototype.sendEmail = function (to, body, subject, webUrl) {
            if (webUrl === void 0) { webUrl = ""; }
            var urlTemplate = webUrl + "/_api/SP.Utilities.Utility.SendEmail";
            var formDigest = document.getElementById("__REQUESTDIGEST").value;
            if (!Array.isArray(to)) {
                to = [to];
            }
            return $.ajax({
                contentType: "application/json",
                url: urlTemplate,
                type: "POST",
                data: JSON.stringify({
                    "properties": {
                        "__metadata": { "type": "SP.Utilities.EmailProperties" },
                        "From": "from",
                        "To": { "results": to },
                        "Subject": subject,
                        "Body": body
                    }
                }),
                headers: {
                    "Accept": "application/json;odata=verbose",
                    "content-type": "application/json;odata=verbose",
                    "X-RequestDigest": formDigest
                }
            }).fail(function () {
                debugger;
            });
        };
        ;
        return funcs;
    }());
    exports.funcs = funcs;
    var updateClientContext = function () {
        var me = new funcs();
        if (typeof SP !== 'undefined' && SP.ClientContext) {
            SP.ClientContext.prototype['loadSpElem'] = function () {
                var args = Array.prototype.slice.call(arguments);
                args.splice(1, 0, this);
                return me.loadSpElem.apply(me.loadSpElem, args);
            };
        }
    };
    var extensionsDone = false;
    exports.initExtensions = function () {
        if (typeof SP !== 'undefined' && !extensionsDone) {
            SP.SOD.executeOrDelayUntilScriptLoaded(function () {
                extensionsDone = true;
                defaultLogger.debug('SP.ready');
                updateClientContext();
            }, "sp.js");
            SP.SOD.executeFunc("sp.js", null, null);
        }
    };
    exports.initExtensions();
});
define("def.api", ["require", "exports", "logger.api", "utils.api", "list.api", "jquery"], function (require, exports, logger_api_3, utils_api_2, list_api_1, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (typeof window !== 'undefined') {
        window['spexplorerjs'] = window['spexplorerjs'] || {
            version: '1.0.3',
            modules: {
                logger: logger_api_3.Logger,
                funcs: new utils_api_2.funcs(),
                utils: utils_api_2.funcs,
                listapi: list_api_1.ListApi,
                listdal: list_api_1.ListDal,
                folderapi: list_api_1.FolderApi,
                webapi: list_api_1.WebApi,
                jQuery: jQuery
            }
        };
    }
});
//# sourceMappingURL=api.amdbundle.js.map