/// <reference types="sharepoint" />
/// <reference types="sp-request" />

//v 0.1

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global['document'] = document;
global['window'] = window;
const fs = require('fs');
const path = require('path');
//import * as Api from './def.api';
import jQuery = require('jquery');
var j$ = jQuery;
//import * as Schema from "./schema";
import * as sprequest from "sp-request";
import { ListMeta } from '../api/meta.api';
import { Logger } from '../api/logger.api';
import { funcs } from '../api/utils.api';
import { ListApi } from '../api/list.api';

var trace = new Logger("backups.node");
var utils = new funcs();

export function backupList(listDef: ListMeta, ctx: SP.ClientContext, localFolder: string, settings: any): JQuery.Promise<void> {

	trace.log(`backing-up ${listDef.title}`);

	var listDal = new ListApi(ctx);
	var lDfd = j$.Deferred();
	var web = ctx.get_web();
	var list = web.get_lists().getByTitle(listDef.title);

	ctx.load(web);
	ctx.load(list);

	ctx.executeQueryAsync(function () {
		var caml = "<View><ViewFields>";
		var fields = 'ID|Created|Modified|Author|Editor|Title'.split('|');
		if (list.get_enableAttachments()) {
			fields.push("Attachments");
		}
		fields.forEach(function (field) {
			caml += `<FieldRef Name='${field}' />`;
		});
		listDef.fields.forEach(function (field) {
			caml += `<FieldRef Name='${field.name}' />`;
			fields.push(field.name);
		});
		caml += `</ViewFields></View>`;

		//var cdw = process.cwd();
		var localPath = path.join(localFolder, `./lists/${listDef.title}`);

		var data = []; //serializable friendly array of items

		var webUrl = web.get_url();

		var downloadFile = function (serverRelativeUrl: string, filePath: string) {
			var queryUrl = `${webUrl}/_api/web/GetFileByServerRelativeUrl('${serverRelativeUrl}')/$value`;
			var opts = {
				encoding: null,
				method: 'GET',
				url: queryUrl,
				headers: {
					json: false,
					'Accept': '*/*',
					'Content-Type': 'application/octet-stream',
					'Accept-Encoding': 'gzip, deflate, br'
				}, callback1: function (error, response, body) {
					debugger;
					var req = require('request');
					opts.headers = response.request.headers;
					var r = req(opts);
					r.on('response', function (res) {
						res.pipe(fs.createWriteStream('c:\\temp\\pic2.png'));
					});
				}
			};

			let spr = sprequest.create(settings);
			spr.get(opts).then(response => {
				fs.writeFile(filePath, response.body, function (err) {
					if (err)
						console.log(err);
				});
			}).catch(err => {
				debugger;
				console.log(err);
			});
		};
		var processItem = function (li: SP.ListItem): JQuery.Promise<any> {
			var itemdfd = j$.Deferred();
			var item: any = {};// serilizable
			fields.forEach(function (field) {
				var value = li.get_item(field);
				if (Array.isArray(value) && value.length > 0) {
					var temp = [];
					value.forEach(function (i) {
						var s = serializeFriendlyValue(i);
						temp.push(s);
					});
					value = temp;
				} else {
					value = serializeFriendlyValue(value);
				}
				item[field] = value;
			});
			var attachmentsLocalPath = path.join(localPath, `/${item.ID}/Attachments`);
			var mkdrip = require('mkdirp');
			mkdrip(attachmentsLocalPath, function (err) {
				if (err) {
					debugger;
					console.error(err);
				}
				if (item.Attachments === true) {
					item.AttachmentList = [];
					var attachments = li.get_attachmentFiles();
					ctx.load(attachments);
					var folderUrl = `${settings.webUrl}/Lists/${listDef.title}/Attachments/${item.ID}`;
					var attFolder = web.getFolderByServerRelativeUrl(folderUrl);
					var attFiles = attFolder.get_files();
					ctx.load(attFiles, 'Include(ServerRelativeUrl,Name,Author)');

					ctx.executeQueryAsync(function () {
						utils.collectionToArray(attFiles).forEach(function (att: SP.File) {
							var attServerRelativeUrl = att.get_serverRelativeUrl();
							var localAttPath = path.join(attachmentsLocalPath, att.get_name());
							downloadFile(attServerRelativeUrl, localAttPath);
							var author = att.get_author();
							var authorLookup = {
								LookupId: author.get_id(),
								LookupValue: author.get_loginName(), Email: author.get_email()
							};
							item.AttachmentList.push({
								LocalPath: localAttPath,
								name: att.get_name(),
								author: authorLookup
							});
						});
						data.push(item);
						itemdfd.resolve();
					}, function () {
						debugger;
					});
				} else {
					data.push(item);
					itemdfd.resolve();
				}
			});
			return itemdfd.promise();
		};
		var serializeFriendlyValue = function (value) {
			if (value && (<any>SP.FieldLookupValue).isInstanceOfType(value)) {
				var lookup = value as SP.FieldLookupValue;
				var temp: any = { LookupId: lookup.get_lookupId(), LookupValue: lookup.get_lookupValue() };

				if ((<any>SP.FieldUserValue).isInstanceOfType(value)) {
					var userLookup = value as SP.FieldUserValue;
					temp.Email = (<any>userLookup).get_email();
				}
				value = temp;
			}
			return value;
		};

		trace.log('getting items');

		listDal.getAll(list, caml).done(function (items: Array<SP.ListItem>) {
			trace.log(`Item #: ${items.length}`);

			utils.processAsQueue<SP.ListItem>(items, function (li) {
				return processItem(li);
			}).done(function () {
				var filePath = path.join(localPath, `data.json`);
				var json = JSON.stringify(data, null, '\t');
				fs.writeFile(filePath, json, function (err) {
					if (err)
						console.log(err);
					lDfd.resolve();
				});
			});
		});

	}, function () {
		debugger;
	});
	return lDfd.promise();
};

export function restoreList(listDef: ListMeta, ctx: SP.ClientContext, localFolder: string, settings: any): JQuery.Promise<void> {

	var listDal = new ListApi(ctx);
	listDal.ensureList(listDef).then(function (list: SP.List) {

		ctx.load(list);
		ctx.executeQueryAsync(function () {
			if (list.get_enableAttachments()) {
			}

			//var cdw = process.cwd();
			var localPath = path.join(localFolder, `./lists/${listDef.title}`);

			var filePath = path.join(localPath, `data.json`);
			var dataitems = require(filePath);

			dataitems.forEach(function (n) {
				delete n['Attachments'];
				delete n['ID'];
				delete n['Editor'];
				delete n['Modified'];
				delete n['Created'];
				delete n['Author'];
			});
			listDal.addItems(dataitems, list).done(function () {
				lDfd.resolve();
			});
		}, function () {
			debugger;
		});

	});

	trace.log(`restore ${listDef.title}`);
	//var web = ctx.get_web();
	//var list = web.get_lists().getByTitle(listDef.title);
	var lDfd = j$.Deferred();
	return lDfd.promise();
};

//export function backupLists(ctx: SP.ClientContext, settings: any) {
//	var defs = new Schema.Defs(settings.webUrl);
//	var utils = new Api.funcs();
//	var listDal = new Api.ListDal(ctx);
//	var lists = defs.getLists();
//	utils.processAsQueue<ListMeta>(lists, function (def) {
//		trace.log(`starting backup ${def.title}`);
//		return backupList(def).done(function () {
//			trace.log(`backup ${def.title} done`);
//		});
//	}).done(function () {
//		trace.log('backup complete');
//	});
//};

export function restoreLists(ctx: SP.ClientContext, settings: any, sourceSettings: any) {
	//var defs = new Schema.Defs(settings.webUrl);
	//var utils = new Api.funcs();
	//var listDal = new Api.ListDal(ctx);

	//var lists = defs.getLists();
	//lists = [defs.configListDef()];
	//utils.processAsQueue<ListMeta>(lists, function (def) {
	//	trace.log(`starting restore ${def.title}`);
	//	return restoreList(def).done(function () {
	//		trace.log(`restore ${def.title} done`);
	//	});
	//}).done(function () {
	//	trace.log('restore complete');
	//});
};
export function buildWebSchema(settings: any) {
	//var defs = new Schema.Defs(settings.webUrl);
	//var cdw = process.cwd();
	//var localPath = path.join(cdw, './src/schema');
	//console.log(localPath);
	//defs.getLists().forEach(function (list) {
	//	var classStr = Api.classBuilder(list);
	//	var filePath = path.join(localPath, `${list.title}Def.ts`);
	//	fs.writeFile(filePath, classStr, function (err) {
	//		if (err)
	//			console.log(err);
	//	});
	//});
};
