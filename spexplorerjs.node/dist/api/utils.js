"use strict";
/// <reference types='sharepoint'/>
/// <reference types='jquery'/>
// v 0.1.9 - 2020_05_08 - Use private jQuery
// v 0.1.8 - 2020_04_10 - loadSpElem: reject promise on failure
// v 0.1.7 - 2020_03_24 - pageArray
// v 0.1.6 - 2020_03_20 - log all errors on reqFailure, context optional on spLoadElem, improved getGroups
Object.defineProperty(exports, "__esModule", { value: true });
exports.initExtensions = exports.funcs = exports.pagewps = exports.version = void 0;
var logger_1 = require("./logger");
var $ = require('jquery');
var defaultLogger = new logger_1.Logger('Utils');
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
exports.version = '0.1.9';
var pagewps = /** @class */ (function () {
    function pagewps() {
    }
    return pagewps;
}());
exports.pagewps = pagewps;
;
var funcs = /** @class */ (function () {
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
                    }, function ( /*r, a*/) { });
                }, function ( /*r, a*/) { });
            }).promise();
        };
        // --- Groups
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
                        // Create a new RoleDefinitionBindingCollection.
                        // Add the role to the collection.
                        collContribute.add(rdContribute);
                    }
                    // Get the RoleAssignmentCollection for the target web.
                    var assignments = securable.get_roleAssignments();
                    // assign the group to the new RoleDefinitionBindingCollection.
                    assignments.add(principal, collContribute);
                    ctx.load(principal);
                    ctx.executeQueryAsync(function () {
                        dfd.resolve(principal);
                    }, function (r, a) {
                        reqFailure(r, a, dfd);
                    });
                };
                // @ts-ignore
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
        // --- Groups
        /**
         * returns table rows that contain the keyword FieldInternName. This identify legacy form fields in a SharePoint form
         * @returns object with properties that match the internal name of each field in the form. The propety value is the html table row
        */
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
    /**
     * Divides array into an array of arrays where each sub array has no more than pageNum numer of items
     * @param array : array to be divided
     * @param pageNum : numer of items per sub array
     */
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
    /**
     * Adds a script link to userCustomActions. If a match is found (by title) then a new record is not added
     * @param ctx SharePoint Client context
     * @param src src of the script link
     * @param title title of the script link
     * @param sequence sequence of the script link
     * @param logger logger
     */
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
            ctx: ctx,
            wps: {}, lpm: null
        };
        var me = this;
        var web = ctx.get_web();
        var oFile = web.getFileByServerRelativeUrl(formUrl);
        var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
        result.lpm = lpm;
        var wps = lpm.get_webParts();
        ctx.load(wps); //, "Include(WebPart.Title)");
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
            }, function ( /*r, a*/) { debugger; });
        }, function ( /*r, a*/) { debugger; });
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
            }); //;
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
        //https://sharepoint.stackexchange.com/questions/150833/sp-utilities-utility-sendemail-with-additional-headers-javascript
        //https://www.linkedin.com/pulse/limitation-sendmail-functioning-sharepoint-using-client-hai-nguyen/
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
//# sourceMappingURL=utils.js.map