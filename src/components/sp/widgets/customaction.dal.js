import "../../logger/logger.js";
import "../api/sp.base.js";

(function (ns, $) {

	var debug = window.location.href.search(/[local|debugcustomactionsel]/) > 0;
	var trace = ns.modules.logger.get("caSel", debug);

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
					trace.log(list);
					var enumer = fields.getEnumerator();
					var spfields = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						spfields.push(cur);
					}
					spfields.sort(function (x, y) { return x.get_title().localeCompare(y.get_title()); });
					dfd.resolve(spfields);
				}, function onError(sender, args) {
					trace.error(`Request failed ${args.get_message()}\n${args.get_stackTrace()}`);
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
					trace.log(lists);
					var enumer = lists.getEnumerator();
					var splists = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						splists.push(cur.get_title());
					}
					dfd.resolve(splists);
				}, function onError(sender, args) {
					trace.error(`Request failed ${args.get_message()}\n${args.get_stackTrace()}`);
				});

			}).promise();
		};

		var getActions = function (elem) {
			var container = elem || web;
			var dfd = $.Deferred();
			var actions = container.get_userCustomActions();
			ctx.load(actions);

			ctx.executeQueryAsync(function () {
				var actionArray = ns.modules.spapi.collectionToArray(actions);

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
				trace.log("addCustomAction.done");
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

	var utils = ns.modules.spapi;
	var customactions = {
		dal: CASPDAL,
		version: "0.1.2",
		getActions: function (container) {
			var actions = container.get_userCustomActions();

			var dfd = $.Deferred();
			utils.loadSpElem(actions).done(function () {
				var actionArray = ns.modules.spapi.collectionToArray(actions);

				dfd.resolve(actionArray);

			});

			return dfd.promise();

		}
		, addCustomAction: function (container, location, ext, sequence, perms, title, src) {
			var actions = container.get_userCustomActions();

			var action = actions.add();
			action.set_sequence(sequence || 0);
			action.set_location(location);

			(title && action.set_title(title));
			(ext && action.set_commandUIExtension(ext));
			(src && action.set_scriptSrc(src));

			if (perms) action.set_rights(perms);

			action.update();

			return utils.loadSpElem(action);

		}

	};

	ns.modules.customactions = customactions;
})(spexplorerjs, spexplorerjs.modules.jQuery);