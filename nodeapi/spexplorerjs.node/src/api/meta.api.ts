import { ListDal } from "./list.api";

export class ListMeta {
	public fields: FieldMeta[];
	public listTemplate: number;
	public title: string;
	public defaultItems: any[];
	public listUpdates?: listUpdatesFunction;
	public permissions?: GroupMeta[];

	constructor(title: string) {
		this.title = title;
		this.fields = [];
		this.defaultItems = [];
	}

	public static version: '0.1';
}

export class GroupMeta {
	name: string;
	permissions: [string];
	desc?: string = '';
}

export class FieldMeta {
	markup: markupFunction | string;
	name: string;
	legacyName?: string | null;
	title?: string | null;
	post?: postFunction;
	inDefaultView?: boolean = false;
}

export var classBuilder = function (list: ListMeta): string {

	var fieldStr = "";
	list.fields.forEach(function (field) {
		fieldStr += `public static ${field.name} : string = "${field.name}";\n`;
	});
	var template = `export class ${list.title}Def {
	${fieldStr}
}`
	return template;
};

export type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
export type listUpdatesFunction = (list: SP.List, dal: ListDal) => Promise<any>;
export type postFunction = (field: SP.Field) => void;