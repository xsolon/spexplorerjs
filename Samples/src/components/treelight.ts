/// <reference types='jquery' />
/// <reference types='jstree' />
import 'jstree/dist/themes/default/style.css';
import 'spexplorerts/api/def.api';
import { spexplorerjs } from 'spexplorerts/api/def.api';
import { Logger, funcs } from 'spexplorerts';

require('jstree');
var trace: Logger = Logger.get("logger");
trace.shouldDebug = true;
var utils = new funcs();

export class TreeLight {
  constructor(el: any, opts?: { [key: string]: any }) {
    var ui = $(el);
    var me = this;
    trace.log('TreeLight.init');
    var ns: spexplorerjs = window['spexplorerjs']
    ExecuteOrDelayUntilScriptLoaded(() => {
      var ctx = SP.ClientContext.get_current();

      var sortByText = (a: any, b: any): number => {
        if (a.text < b.text) return -1;
        if (a.text > b.text) return 1;
        return 0;
      };
      var loadSiteUsers = function (node, cb) {
        var web = tree.get_node(node.parent).data;

        var groups = [];
        if (web.get_siteUsers) {

          var gs = web.get_siteUsers();
          ctx.load(gs);
          ctx.executeQueryAsync(function () {
            var enumer = gs.getEnumerator();
            while (enumer.moveNext()) {
              var g = enumer.get_current();
              groups.push({ text: g.get_title(), id: g.get_id() + "_User", data: g, icon: "/_layouts/images/ribbon_userprofile_16.png" });
            }
            cb(groups);
          });
        }
        else {
          ctx.executeQueryAsync();
          var l = web.get_siteUserInfoList();
          var lis = l.getItems(SP.CamlQuery.createAllItemsQuery());
          ctx.load(lis);
          ctx.executeQueryAsync(function () {

            var enumer = lis.getEnumerator();
            //var count = 0;
            var doNext = function () {

              if (!enumer.moveNext()) {
                cb(groups);
                return;
              }
              var li = enumer.get_current();
              var name = li.get_item("Name");
              if (name.search(" ") > 0) {
                doNext();
              }
              else {
                var id = li.get_item("ID");
                var user = web.ensureUser(name);
                ctx.load(user);
                groups.push({ text: name, id: id + "_User", data: user, icon: "/_layouts/images/ribbon_userprofile_16.png" });
                //count++;
                //if (count % 50 == 0)
                ctx.executeQueryAsync(function () {
                  doNext();
                }, function () {
                  doNext();
                });

              }
            };

            doNext();
          });
        }

      };
      var loadCType = function (node, cb) {
        var list = node.data;
        var items = [];
        items.push({ text: "Field Links", id: list.get_id() + "_FieldLinks", data: list.get_fieldLinks(), children: true, icon: "/_layouts/15/images/HLTHINFO.PNG" });
        items.push({ text: "Fields", id: list.get_id() + "_Fields", data: list.get_fields(), children: true, icon: "https://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-menu-icon.png" });

        cb(items);
      };
      var loadList = function (node, cb) {
        var list: SP.List = node.data;
        trace.log({ list: list });
        var items = [];
        if (list.get_hasUniqueRoleAssignments()) {
          items.push({ text: "Security", id: list.get_id() + "_Security", data: list.get_roleAssignments(), icon: "/_layouts/15/images/sharethissite.png" });
        }

        if (list.get_itemCount() > 0) {
          items.push({ text: "Items", id: list.get_id() + "_Items", data: list.get_defaultViewUrl() });
        }

        //items.push( { text: 'Meta', id: list.get_id() + "_Meta", icon: 'https://icons.iconarchive.com/icons/fatcow/farm-fresh/16/database-table-icon.png' });
        items.push({ text: "Content Types", id: list.get_id() + "_ContentTypes", data: list.get_contentTypes(), children: true, icon: "/_layouts/15/images/HLTHINFO.PNG" });
        items.push({ text: "Fields", id: list.get_id() + "_Fields", data: list.get_fields(), children: true, icon: "https://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-menu-icon.png" });
        items.push({ text: "Views", id: list.get_id() + "_Views", data: list.get_views(), children: true, icon: "https://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-menu-icon.png" });

        cb(items);
      };
      var loadCollection = function (node, cb) {
        trace.debug("loading collection");
        var col: SP.ClientObjectCollection<any> = node.data;

        var iconUrl = null;
        var gettext: (any) => string = (x) => x.get_title();
        //@ts-ignore
        if (SP.ListCollection.isInstanceOfType(col)) {
          ctx.load(col, "Include(Id,Title,HasUniqueRoleAssignments,ImageUrl,ItemCount,DefaultViewUrl)");
          gettext = (list: SP.List) => `${list.get_title()} (${list.get_itemCount()})`;
        }
        //@ts-ignore
        else if (SP.UserCollection.isInstanceOfType(col)) {
          iconUrl = "https://icons.iconarchive.com/icons/apathae/wren/16/Group-icon.png";
        }
        //@ts-ignore
        else if (SP.UserCollection.isInstanceOfType(col)) {
          iconUrl = "/_layouts/images/ribbon_userprofile_16.png";
        }
        //@ts-ignore
        else if (SP.ContentTypeCollection.isInstanceOfType(col)) {
          gettext = (x: SP.ContentType) => `${x.get_name()}`;
          iconUrl = "https://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/application-block-icon.png";
        }
        //@ts-ignore
        else if (SP.FieldCollection.isInstanceOfType(col)) {
          gettext = (x: SP.Field) => `${x.get_title()} -${x.get_internalName()}`;
          iconUrl = "https://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-text-field-icon.png";
        }
        //@ts-ignore
        else if (SP.FieldLinkCollection.isInstanceOfType(col)) {
          gettext = (x: SP.FieldLink) => `${x.get_name()}`;
          iconUrl = "https://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-text-field-icon.png";
        }
        //@ts-ignore
        else if (SP.WebCollection.isInstanceOfType(col)) {
          iconUrl = "/_layouts/images/sts_web16.gif";
        }
        else {
        }
        ctx.load(col);
        ctx.executeQueryAsync(function () {
          trace.debug("collection loaded");
          var lenum = col.getEnumerator();
          var spLists = [];

          while (lenum.moveNext()) {
            var list: any = lenum.get_current();

            //@ts-ignore
            var nodeText = gettext(list);
            var node: any = {
              children: true, text: nodeText,
              id: list.get_id().toString(), data: list
            };
            if (list['get_imageUrl'])
              node.icon = list.get_imageUrl();
            else if (iconUrl)
              node.icon = iconUrl;

            spLists.push(node);
          }

          spLists.sort(function (a, b) {
            if (a.text < b.text) return -1;
            if (a.text > b.text) return 1;
            return 0;
          });

          trace.log({ collection: spLists });
          cb(spLists);
        });
      };
      var loadRoot = function (node, cb: (node: any, status?: boolean) => void) {
        var web: SP.Web = ctx.get_web();

        ctx.load(web, "Id", "Title", "HasUniqueRoleAssignments", "ServerRelativeUrl");
        utils.loadSpElem(web, ctx).done(function () {
          var nodeText = `${web.get_title()}`;
          var wnode: any = {
            children: true, text: nodeText,
            id: web.get_id().toString(), data: web, icon: "/_layouts/images/sts_web16.gif"
          };

          cb(wnode);
        });

      };
      var loadWeb = (node, cb: (node: any, status?: boolean) => void) => {
        var web: SP.Web = node.data;
        var id = web.get_id().toString();
        //web.getSubwebsForCurrentUser(new SP.SubwebQuery())
        var result: any[] = [{ text: "Lists", children: true, id: id + "_Lists", icon: "/_layouts/15/images/itgen.png?rev=23", data: web.get_lists() },
        { text: "Webs", id: id + "_Webs", icon: "/_layouts/15/images/siteicon_16x16.png", children: true, data: web.get_webs() },
        { text: "Content Types", id: id + "_ContentTypes", data: web.get_availableContentTypes(), children: true, icon: "/_layouts/15/images/HLTHINFO.PNG" },
        { text: "Fields", id: id + "_Fields", data: web.get_availableFields(), children: true, icon: "/_layouts/15/images/HLTHINFO.PNG" }
          , { text: "User Actions", id: id + "_Actions", data: web.get_userCustomActions(), children: true, icon: "/_layouts/15/images/HLTHINFO.PNG" }
        ];

        if (web.get_hasUniqueRoleAssignments()) {
          result.push({ text: 'Site Groups', children: true, id: id + "_Groups", data: web.get_siteGroups() });
          result.push({ text: 'Site Users', children: true, id: id + "_Users", data: web.get_siteUsers() });
          //result.push({ text: 'Properties', children: true, id: id + "_Properties", data: web.get_allProperties() });
        }

        cb(result);
      };
      ui.jstree({
        core: {
          "worker": false,
          "check_callback": function (/*operation, node, node_parent, node_position, more*/) {
            return true;
          },
          data: function (node, cb) {
            ns.node = node;
            trace.log({ tree_data_node: node });
            if (node.id === "#")
              loadRoot(node, cb);
            //@ts-ignore
            else if (SP.ClientObjectCollection.isInstanceOfType(node.data)) {
              loadCollection(node, cb);
            }
            //@ts-ignore
            else if (SP.Web.isInstanceOfType(node.data)) {
              loadWeb(node, cb);
            }
            //@ts-ignore
            else if (SP.List.isInstanceOfType(node.data)) {
              loadList(node, cb);
            }
            //@ts-ignore
            else if (SP.ContentType.isInstanceOfType(node.data)) {
              loadCType(node, cb);
            } else {
              cb([]);
            }
          }
        }
        , "plugins": ["contextmenu"], contextmenu: {
          items: function (/*o, cb*/) {
            return {
              "expand": {
                "label": "Expand tree",
                "action": function (data) {
                  var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                  inst.open_all(obj);
                }
              }
              , "collapse": {
                "label": "Collapse tree",
                "action": function (data) {
                  var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                  inst.close_all(obj);
                }
              }
            };
          }
        }
      })
        .on("changed.jstree", function (e, data) {
          e.preventDefault();
          e.stopPropagation();
          trace.log({ jstreechanged: data.node.id });
          var spElem = data.node.data;
          if (spElem) {
            window['sel'] = spElem;
            //var type = spElem.constructor.getName();
            //if (opts.selectable["All"] || opts.selectable[type]) {
            //  selectionChanged(spElem);
            //}
            var handlers = me.eventHandlers['selectionChange'];
            if (handlers) {
              handlers.forEach((x) => {
                x(spElem);
              });
            }
          }
        }).on("open_node.jstree", function (e/*, data*/) {
          e.preventDefault();
          e.stopPropagation();
        }).on("close_node.jstree", function (e/*, data*/) {
          e.preventDefault();
          e.stopPropagation();
        });
      ;
      var tree: JSTree = ui.data('jstree');

      //tree.create_node(null, {
      //  id: "currentsitecol", text: "Site Collection", data: null
      //}, "last");

    }, 'sp.js');
  }
  eventHandlers: { [key: string]: Function[] } = {};
  on(eventName: string, prom: (e: any) => void): void {
    this.eventHandlers[eventName] = this.eventHandlers[eventName] || [];
    this.eventHandlers[eventName].push(prom);
  }
}
