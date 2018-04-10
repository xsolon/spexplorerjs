/// <reference path="../../typings/sharepoint/index.d.ts" />
/// <reference path="../widget.base.js" />
/// <reference path="sp.list.js" />
import "./sp.base.js";
import "./sp.web.js";
import "./treelight.js";
import "../mirrors/xmlmirror.js";
import "../widget.base.js";
import "./sp.list.js";

import template from "./spFileReport.html";

(function (ns, $) {

    var trace = ns.logger.get("FileReport", true);
    const oldReport = function (ui/*, opts*/) {
        var selectedObject = null;
        var cancel = false;

        var run = function (root, caml) {
            return $.Deferred(function (rundfd) {

                var arr = [root];
                var ctx = null;
                var allItems = [];
                var getWebs = function (web) {
                    return $.Deferred(function (websdfd) {

                        var subs = web.getSubwebsForCurrentUser();

                        ns.sp.loadSpElem(subs).done(function () {
                            websdfd.resolve(ns.sp.collectionToArray(subs));
                        });
                    }).promise();

                };
                var getWebLists = function (web) {
                    return $.Deferred(function (dfd) {
                        var lists = web.get_lists();
                        ctx.load(lists);

                        ctx.executeQueryAsync(function () {
                            lists = ns.sp.collectionToArray(lists);

                            // only doc libraries
                            lists = jQuery.grep(lists,
                                function (n) {
                                    return n.get_baseTemplate() === 101;
                                });

                            lists.forEach(function (list) {
                                var msg = String.format("---{0} {1} {2}",
                                    list.get_title(),
                                    list.get_itemCount());

                                trace.debug(msg);
                            });
                            dfd.resolve(lists);

                        });

                    }).promise();
                };

                var parseItem = function (item) {
                    var n = item.get_fieldValues();
                    return {
                        title: n.Title || n.FileLeafRef,
                        modified: n.Modified,
                        created: n.Created,
                        modifiedby: n.Modified_x0020_By,
                        createdby: n.Created_x0020_By,
                        url: n.FileRef
                    };
                };

                var doList = function (list) {

                    var msg = `--Processing list: ${list.get_title()} :# ${list.get_itemCount()}`;
                    SP.UI.Notify.addNotification(msg);

                    trace.debug(msg);

                    var dal = new ns.listapi.Dal(list);

                    return $.Deferred(function (listDfd) {
                        dal.getItems(caml).done(function (items) {
                            items.forEach(function (item) {
                                allItems.push(parseItem(item));
                            });
                            trace.log(`---Added #${items.length} from ${list.get_title()}`);
                            listDfd.resolve();
                        });
                    }).promise();
                };

                ns.funcs.processAsQueue(arr,
                    function (obj) {
                        ctx = ctx || obj.get_context();

                        return $.Deferred(function (dfd) {
                            if (cancel) {
                                arr.length = 0;
                                dfd.resolve();
                            } else if (SP.List.isInstanceOfType(obj)) { // list
                                doList(obj).done(function () {
                                    dfd.resolve();
                                });
                            } else if (SP.Web.isInstanceOfType(obj)) { // list
                                var msg = `Processing web: ${obj.get_title()}`;
                                SP.UI.Notify.addNotification(msg);
                                trace.log(msg);

                                $.when(getWebs(obj), getWebLists(obj)).done(function (webs, lists) {

                                    webs.forEach(function (w) { arr.push(w); });
                                    lists.forEach(function (n) { arr.push(n); });

                                    trace.debug(`Web done: ${obj.get_title()}`);
                                    dfd.resolve();
                                });

                            } else {
                                throw "Type not supported select a web or a list";
                            }

                        }).promise();
                    }).done(function () {
                        trace.log("done");
                        rundfd.resolve(allItems);
                    });

            }).promise();
        };

        (function () {

            var $el = $(ui);
            $el.html(template.trim().replace("[label]", ""));

            var btn = $(".btnRunReport", $el);
            var btnCancel = $(".btnCancel", $el).click(function () {
                cancel = true;
            });

            ns.widgets.xSPTreeLight.startup($(".listSelectorFirst", $el)).on("listchange", function (event, list) {
                selectedObject = list;
                btn.prop("disabled", false);
            });

            var xmlWidget = ns.widgets.xxmlmirror.startup($el).data("xwidget");

            btn.click(function () {
                cancel = false;

                btn.prop("disabled", true);
                btnCancel.show();
                var caml = xmlWidget.getXml();

                run(selectedObject, caml).done(function (items) {
                    btn.prop("disabled", false);
                    btnCancel.hide();
                    trace.log(items.length);
                    //ns.sp.uploadAjax()
                });

                return false;
            });

        })();

        return {};
    };

    ns.widgets.addSpWidget("spFileReport", oldReport, "0.0.1");

})(spexplorerjs, jQuery);