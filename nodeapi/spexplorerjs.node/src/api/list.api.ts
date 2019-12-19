// v 0.1.5 - 2018_11_27 - Use displayname if field definition does not have internal/name/static attributes
import { Logger } from './logger.api';
import { FieldMeta, ListMeta, itemsFunction } from './meta.api';
import { funcs } from "./utils.api";

import jQuery = require('jquery');
global['$'] = jQuery;
var utils: funcs = new funcs();

export type QueueStep = (item) => Promise<void>;
export type ArrayPromise = () => Promise<Array<any>>;

export class ListDal {
  version: '0.1.7';
  title: string;
  defaultQuery: string
  ctx: SP.ClientContext;
  dal: ListApi;
  list: SP.List;
  constructor(title: string, defaultQuery: string = "<View/>") {
    this.title = title;
    this.defaultQuery = defaultQuery;
    this.ctx = SP.ClientContext.get_current();
    this.list = this.ctx.get_web().get_lists().getByTitle(this.title);
    this.dal = new ListApi(this.ctx);
  }
  getList(): SP.List {
    return this.list;
  }
  getItems(query: string = this.defaultQuery): JQuery.Promise<SP.ListItem[]> {
    return this.dal.getAll(this.list, query);
  }
  getItemById(id: number): JQuery.Promise<SP.ListItem> {
    var li = this.list.getItemById(id);

    this.ctx.load(li);
    this.ctx.executeQueryAsync(function () {
      ddf.resolve(li);
    });
    var ddf = jQuery.Deferred();
    return ddf.promise();
  }
}

export class ListApi {
  version: '0.1.7';
  ctrace: Logger = new Logger('ListApi');
  ctx: SP.ClientContext;

  constructor(ctx?: SP.ClientContext) {
    this.ctx = ctx || SP.ClientContext.get_current();
  }

  ensureFields = function (list: SP.List, fields: Array<FieldMeta>) {
    var me = this;
    me.ctrace.debug('enureFields.begin');
    //fields = fields || args.Fields || [];
    var spfields = list.get_fields();
    var loadFields = function (): Promise<Map<string, SP.Field>> {
      return $.Deferred(function (dfd) {
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
    var getMarkup = function getMarkup(field: FieldMeta, spfields): Promise<string> {
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
        } else {
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
        utils.processAsQueue<FieldMeta>(fields.slice(), function (field: FieldMeta) {
          return $.Deferred(function (fieldDfd) {
            me.ctrace.log(`-- field: ${field.name}`);
            getMarkup(field, spFieldMap).then(function (xml) {

              var fieldXML = $($.parseXML(xml)).find("Field");
              var internalName = fieldXML.attr("InternalName") || fieldXML.attr("Name") || fieldXML.attr("StaticName") || fieldXML.attr("DisplayName");
              var spField = spFieldMap[internalName];
              if (spField) {
                me.ctrace.debug(internalName + " found");
              } else {
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
  listExists(title: string): Promise<[boolean, SP.List]> {
    var me = this;

    let lists = me.ctx.get_web().get_lists();
    me.ctx.load(lists, 'Include(Title)');
    return $.Deferred(function (dfd) {
      me.ctx.executeQueryAsync(function () {
        var list = lists.get_data().find(i => i.get_title() == title);
        me.ctrace.debug(`${title}.exists: ${list != null}`);
        dfd.resolve([list != null, list]);
      });
    }).promise();
  };
  ensureList(meta: ListMeta): Promise<SP.List> {
    var me = this;
    return $.Deferred(function (dfd) {
      var isNew = false;
      var done = function (list: SP.List) {
        if (meta.listUpdates) {
          meta.listUpdates(list, me).then(function () {
            me.ctrace.debug('listUpdates.done');
            if (isNew && meta.defaultItems) {
              var addFunction = function (items) {
                me.addItems(items, list).done(function () {
                  dfd.resolve();
                });
              };
              if (Array.isArray(meta.defaultItems)) {
                addFunction(meta.defaultItems as any[]);
              } else {
                (meta.defaultItems as itemsFunction)(list, me).done(function (items) {
                  addFunction(items);
                });
              }
            } else {
              dfd.resolve(list);
            }
          });
        } else
          dfd.resolve(list);
        me.ctrace.debug('ensureList.done');
      };
      me.listExists(meta.title).then(function (res) {
        if (res[0]) {
          me.ensureFields(res[1], meta.fields).then(function () { done(res[1]); });
        } else {
          isNew = true;
          me.createList(meta.title, meta.listTemplate, me.ctx.get_web()).then(function (list) {
            me.ensureFields(list, meta.fields).then(function () {

              if (meta.afterListCreated) {
                meta.afterListCreated(list, me).then(function () {
                  done(list);
                }).catch(function () {
                  debugger;
                });
              } else
                done(list);
            });
          });
        }
      });
    }).promise();
  };
  createList(listTitle, templateType, web): Promise<SP.List> {
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
  getMeta(listTitle: string, fieldNames: any): Promise<ListMeta> {
    var me = this;

    var list = me.ctx.get_web().get_lists().getByTitle(listTitle);
    var fields = list.get_fields();

    me.ctx.load(list);
    me.ctx.load(fields);
    return $.Deferred(function (dfd) {

      me.ctx.executeQueryAsync(function () {
        var meta = new ListMeta(listTitle);

        var spFields: Array<SP.Field> = utils.collectionToArray(fields);

        var attribsToSkip = ['RowOrdinal', 'ID', 'ColName', 'StaticName', 'SourceID'];

        spFields.forEach(f => {

          var name = f.get_internalName();
          if (fieldNames[name] != undefined) {
            var xmlS = f.get_schemaXml();

            var $xml = $.parseXML(xmlS);

            var field = $xml.querySelector('Field');
            attribsToSkip.forEach(function (n) { field.removeAttribute(n); });

            xmlS = $('<x></x>').append($($xml).find('Field')).html().replace(/"/g, "'");
            var display = f.get_title();

            var fieldMeta = new FieldMeta();
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
  setupForms = function (tList: SP.List, scriptLink: string, htmlLink?: string) {

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

    return $.Deferred(function (dfd) {
      utils.loadSpElem([editForm, dispForm, newForm], ctx).done(function () {
        utils.setformJsLink(newForm.get_serverRelativeUrl(), ctx, jslinkUrl).then(function () {
          utils.setformJsLink(dispForm.get_serverRelativeUrl(), ctx, jslinkUrl).then(function () {
            utils.setformJsLink(editForm.get_serverRelativeUrl(), ctx, jslinkUrl).then(function () {
              if (htmlLink) {
                addWebPart(dfd);
              } else {
                dfd.resolve();
              }
            });
          });
        });
      });
    }).promise();
  };
  addItems(items: Array<any>, splist: SP.List, folderUrl?: string): JQuery.Promise<any> {
    var me = this;
    me.ctrace.log('starting addItems');
    var prepLookupValue = function (raw) {
      var val = null;
      // @ts-ignore
      if (raw == null || SP.User.isInstanceOfType(raw) || SP.FieldLookupValue.isInstanceOfType(raw)) {
        val = raw;
      } else if (Array.isArray(raw)) {
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
    var fields: SP.FieldCollection = splist.get_fields();
    me.ctx.load(fields);

    me.ctx.executeQueryAsync(function () {
      var fieldMap: any = {};
      utils.collectionToArray<SP.Field>(fields).forEach(function (n) {
        fieldMap[n.get_internalName()] = n;
      });

      if (items && items.length > 0) {
        var spItems = [];
        try {
          for (var i = 0; i < items.length; i++) {

            var data = items[i];
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
              } else if (fieldType.search("Lookup") === 0) {

                var itemVal = data[f];
                val = prepLookupValue(itemVal);
              } else {
                val = data[f];
              }

              newspitem.set_item(f, val);
            }
            newspitem.update();
            me.ctx.load(newspitem);
            spItems.push(newspitem);
          }
        } catch (e) {
          me.ctrace.error(e);
          debugger;
        }
        me.ctx.executeQueryAsync(function () {
          me.ctrace.log("addItems done");
          dfd.resolve(spItems);
        }, function (r, a) {
          debugger;
        });
      } else {
        dfd.resolve();
      }

    });

    var dfd = $.Deferred();
    return dfd.promise();
  };
  getQuery(caml?: string, folder?: string): SP.CamlQuery {

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
  runAllQuery(query: SP.CamlQuery, splist: SP.List, limit = 0, trace = this.ctrace): JQuery.Promise<Array<SP.ListItem>> {
    var me = this;
    var spctx = me.ctx;

    var items: Array<SP.ListItem> = [], spItems;

    var parseRows = function (currrentItems) {
      const itemsCount = currrentItems.get_count();
      for (let i = 0; i < itemsCount; i++) {
        const item = currrentItems.itemAt(i);
        if (item) {
          items.push(item);
        }
      }
    };

    var loadNext = function (pageInfo?) {

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
        trace.error(error.get_message());
        //trace.error(JSON.stringify({ query: query, error: error, sender: sender }));
        dfd.reject(sender, error);
      });
    };

    loadNext();

    var dfd = $.Deferred();
    return dfd.promise();
  };
  getAll(splist: SP.List, caml: string, folder?: string, limit: number = 0): JQuery.Promise<Array<SP.ListItem>> {
    var query = this.getQuery(caml, folder);
    return this.runAllQuery(query, splist, limit);
  };

}