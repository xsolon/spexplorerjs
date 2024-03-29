"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// v 0.1.19 - 2020_05_08 - Use private jQuery
// v 0.1.18 - 2020_04_01 - Load Ctype from local web
// v 0.1.17 - 2020_03_26 - FolderApi: uploadFile
// v 0.1.16 - 2020_03_24 - addItems pageNum parameter to insert items throw pages, afterDefaultItemsAdded on ListMeta, FolderApi: ensureAttachmentFolder
// v 0.1.5  - 2018_11_27 - Use displayname if field definition does not have internal/name/static attributes
// v 0.1.9  - 2020_01_31 - addItems returns JQuery.Promise<Array<SP.ListItem>>
// v 0.1.10 - 2020_02_04 - folderApi
// v 0.1.10 - 2020_03_06 - Content Types
// v 0.1.10 - 2020_03_06 - bug in ensureCTypes
var logger_1 = require("./logger");
var meta_1 = require("./meta");
var utils_1 = require("./utils");
var j$ = require('jquery');
var utils = new utils_1.funcs();
// 2020-01-30: 0.1.9 - getItems: additional parameter 'limit'
var ListDal = /** @class */ (function () {
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
        var ddf = j$.Deferred();
        return ddf.promise();
    };
    return ListDal;
}());
exports.ListDal = ListDal;
var ListApi = /** @class */ (function () {
    function ListApi(ctx) {
        this.ctrace = new logger_1.Logger('ListApi');
        this.ensureFields = function (list, fields) {
            var me = this;
            me.ctrace.debug('enureFields.begin');
            //fields = fields || args.Fields || [];
            var spfields = list.get_fields();
            var loadFields = function () {
                return j$.Deferred(function (dfd) {
                    me.ctx.load(spfields, "Include(Title,FieldTypeKind,TypeAsString,InternalName)");
                    me.ctx.executeQueryAsync(function () {
                        //var spFields: Array<SP.Field> = collectionToArray(spfields);
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
                return j$.Deferred(function (dfd) {
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
            return j$.Deferred(function (dfd) {
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
                        return j$.Deferred(function (fieldDfd) {
                            me.ctrace.log("-- field: " + field.name);
                            getMarkup(field, spFieldMap).then(function (xml) {
                                var fieldXML = j$(j$.parseXML(xml)).find("Field");
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
                                    //reqFailure(r, a, "ensureFields", fieldDfd);
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
            var jslinkUrl = scriptLink; //"clienttemplates.js|~site/siteassets / irm / js / refs / forms.js | ~site / siteassets / irm / js / task.form.js";
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
            return j$.Deferred(function (dfd) {
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
        return j$.Deferred(function (dfd) {
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
        var dfd = j$.Deferred();
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
                var dfd1 = j$.Deferred();
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
                var dfd2 = j$.Deferred();
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
                var cDfd = j$.Deferred();
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
        var dfd = j$.Deferred();
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
            var promise = j$.Deferred(function (dd) { dd.resolve(); }).promise();
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
            var promise = j$.Deferred(function (dd) { dd.resolve(existingList); }).promise();
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
        return j$.Deferred(function (dfd) {
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
        return j$.Deferred(function (dfd) {
            me.ctx.executeQueryAsync(function () {
                var meta = new meta_1.ListMeta(listTitle);
                var spFields = utils.collectionToArray(fields);
                var attribsToSkip = ['RowOrdinal', 'ID', 'ColName', 'StaticName', 'SourceID'];
                spFields.forEach(function (f) {
                    var name = f.get_internalName();
                    if (fieldNames[name] != undefined) {
                        var xmlS = f.get_schemaXml();
                        var $xml = j$.parseXML(xmlS);
                        var field = $xml.querySelector('Field');
                        attribsToSkip.forEach(function (n) { field.removeAttribute(n); });
                        xmlS = j$('<x></x>').append(j$($xml).find('Field')).html().replace(/"/g, "'");
                        var display = f.get_title();
                        var fieldMeta = new meta_1.FieldMeta();
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
            // @ts-ignore
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
                    var iDfd = j$.Deferred();
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
        var dfd = j$.Deferred();
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
                //trace.error(JSON.stringify({ query: query, error: error, sender: sender }));
                dfd.reject(sender, error);
            });
        };
        loadNext();
        var dfd = j$.Deferred();
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
var FolderApi = /** @class */ (function () {
    function FolderApi(ctx) {
        this.ctrace = new logger_1.Logger('FolderApi');
        this.createFolderInList = function (name, parentFolderPath, list) {
            var ctx = this.ctx; // || list.get_context();
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
            var dfd = j$.Deferred();
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
        var dfd = j$.Deferred();
        var me = this;
        var ctx = me.ctx;
        var rootFolder = list.get_rootFolder();
        ctx.load(rootFolder);
        ctx.executeQueryAsync(function () {
            var url = rootFolder.get_serverRelativeUrl() + "/Attachments";
            me.folderExists(url + "/" + id).done(function (existingFolder) {
                // @ts-ignore
                if (SP.Folder.isInstanceOfType(existingFolder)) {
                    dfd.resolve(existingFolder);
                }
                else {
                    var attRootF = list.get_parentWeb().getFolderByServerRelativeUrl(url);
                    var attachmentsFolder = attRootF.get_folders().add('_' + id);
                    // @ts-ignore
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
        var dfd = j$.Deferred();
        var folder = web.getFolderByServerRelativeUrl(serverRelativeUrl);
        trace.debug("probing for folder " + serverRelativeUrl);
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
                // Folder doesn't exist at all.
                trace.debug("Folder does not exist.");
                dfd.resolve(false);
            }
            else {
                // An unexpected error occurred.
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
    /**
       * returns folder (creating it and its path if necessary)
       * @param {string} serverRelativeUrl
       */
    FolderApi.prototype.ensureFolderInList = function (serverRelativeUrl, list) {
        var me = this;
        var dfd = j$.Deferred();
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
    /**
     * upload a file: returns an promise<sp.file>
     * @param parentDir: SP.Folder where file will be uploaded
     * @param buffer: base64 encoded byte array
     * @param filename: name of the file to save in sharepoint
     * @param replaceInvalidChars : replace invalid charaters (for onpremises)
     */
    FolderApi.prototype.uploadFile = function (parentDir, buffer, filename, replaceInvalidChars, createInfo) {
        if (replaceInvalidChars === void 0) { replaceInvalidChars = true; }
        var me = this;
        var ctx = me.ctx;
        var trace = me.ctrace;
        var p = j$.Deferred();
        if (!createInfo) {
            var createInfo = new SP.FileCreationInformation();
            createInfo.set_overwrite(true);
        }
        createInfo.set_content(buffer);
        var fileName = filename;
        if (replaceInvalidChars)
            fileName = fileName.replace(/[#%\*:<>?\/|]/g, ""); // remove invalid chars
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
var WebApi = /** @class */ (function () {
    function WebApi(ctx) {
        this.ctrace = new logger_1.Logger('WebApi');
        this.ctx = ctx;
    }
    WebApi.prototype.ensureCTypes = function (ctypes, web) {
        if (web === void 0) { web = null; }
        var me = this;
        var ctx = me.ctx;
        if (web == null)
            web = ctx.get_web();
        var dfd = j$.Deferred();
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
                var dfd1 = j$.Deferred();
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
                    //var ctype = webTypesCol.add(newContentType);
                    ctype.set_jsLink(ctypeMeta.jsLink);
                    ctype.update(false);
                    ctx.load(ctype);
                    //ctx.load(webTypesCol);
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
                var dfd2 = j$.Deferred();
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
                var cDfd = j$.Deferred();
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
//# sourceMappingURL=list.js.map