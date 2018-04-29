import $ from "jquery";
import "../logger/logger.js";
import "./sp.base.js";

(function (ns, $) {

	var debug = window.location.href.search(/[localhost|debugcustomactionsel]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "list.dal";
		return d;
	};
	//var error = new function () {
	//	var d = function () {
	//		ns.logger && ns.logger.error.apply(log, arguments);
	//		if (debug)
	//			SP.UI.Notify.addNotification(arguments[0]);
	//	};
	//	d.source = "list.selector";
	//	return d;
	//};

	var CASPDAL = function (siteUrl) {
		var ctx = (siteUrl) ? new SP.ClientContext(siteUrl) : SP.ClientContext.get_current();
		var web = ctx.get_web();
		var lists = web.get_lists();

		var getFields = function (listName) {

			return $.Deferred(function (dfd) {

				var list = null;
				var iCtx = ctx;
				if (typeof listName == "string") {
					list = lists.getByTitle(listName);
				}
				else {
					list = listName;
					iCtx = list.get_context();
				}
				var fields = list.get_fields();
				iCtx.load(fields);
				iCtx.executeQueryAsync(function () {
					log(list);
					var enumer = fields.getEnumerator();
					var spfields = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						spfields.push(cur);
					}
					spfields.sort(function (x, y) { return x.get_title().localeCompare(y.get_title()); });
					dfd.resolve(spfields);
				}, function onError(sender, args) {
					log("Request failed " + args.get_message() + "\n" + args.get_stackTrace());
					dfd.reject(args);
				});

			}).promise();
		};
		var getList = function (listTitle) {
			return $.Deferred(function (dfd) {

				var list = lists.getByTitle(listTitle);
				ns.sp.loadSpElem(list, ctx).done(function (list) {
					dfd.resolve(list);
				});

			}).promise();
		};

		var getLists = function () {
			return $.Deferred(function (dfd) {

				ctx.load(lists, "Include(Title)");
				ctx.executeQueryAsync(function () {
					log(lists);
					var enumer = lists.getEnumerator();
					var splists = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						splists.push(cur.get_title());
					}
					dfd.resolve(splists);
				}, function onError(sender, args) {
					log("Request failed " + args.get_message() + "\n" + args.get_stackTrace());
				});

			}).promise();
		};

		var getActions = function (elem) {
			var container = elem || web;
			var dfd = $.Deferred();
			var actions = container.get_userCustomActions();
			ctx.load(actions);
            
			ctx.executeQueryAsync(function () {
				var actionArray = ns.sp.collectionToArray(actions);

				dfd.resolve(actionArray);
			}, function (r, a) { ns.sp.reqFailure(r, a, "clearActions", dfd); });

			return dfd.promise();

		};
		//var clearActions = function () {
		//	var dfd = $.Deferred();
		//	var actions = web.get_userCustomActions();
		//	actions.clear();
		//	ctx.load(actions);

		//	ctx.executeQueryAsync(function () {
		//		dfd.resolve(actions);
		//	}, function (r, a) { reqFailure(r, a, "clearActions", dfd); });

		//	return dfd.promise();
		//};
		var addCustomAction = function (list, location, ext, sequence, perms, title, src) {
			var actions = list.get_userCustomActions();

			var action = actions.add();

			action.set_title(title);
			action.set_location(location);
			action.set_commandUIExtension(ext);
			action.set_sequence(sequence || 0);
			(src && action.set_scriptSrc(src));
			if (perms)
				action.set_rights(perms);
			action.update();
			ctx.load(action);
			var dfd = $.Deferred();

			ctx.executeQueryAsync(function () {
				log("addCustomAction.done");
				dfd.resolve(action);
			}, function (r, a) { ns.sp.reqFailure(r, a, "addCustomAction", dfd); });

			return dfd.promise();
		};
		//var addScriptLink = function (name, url, sequence) {
		//	var dfd = $.Deferred();

		//	var actions = ctx.get_site().get_userCustomActions();

		//	var action = actions.add();
		//	action.set_location("ScriptLink");
		//	action.set_title(name);
		//	action.set_scriptSrc(url);
		//	action.set_sequence(sequence);
		//	action.update();

		//	ctx.load(action);

		//	ctx.executeQueryAsync(function () {
		//		dfd.resolve(action);
		//	},
		//	function (r, a) { ns.sp.reqFailure(r, a, "addScriptLink", dfd); });

		//	return dfd.promise();

		//};
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
			function (r, a) { ns.sp.reqFailure(r, a, "addScriptLink", dfd); });

			return dfd.promise();

		};

		return { getFields: getFields, getLists: getLists, getList: getList, getActions: getActions, addCustomAction: addCustomAction };
	};

	ns.customactions = {
		dal: CASPDAL,
		version: "0.1"
	};

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);