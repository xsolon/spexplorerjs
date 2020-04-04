// 2020-03-27 - FieldMeta: added flags(variable to store attributes, not used internally), ListMeta: getConfig (variable to store a function, not used internally)
// 2020-03-23 - FieldMeta: added multiValue
import { ListApi } from "./list.api";

export class ListMeta {
  public fields: FieldMeta[];
  public ctypes: CTypeMeta[];
  public listTemplate: number;
  public title: string;
  public defaultItems: Array<{ [key: string]: any }> | itemsFunction;
  public afterDefaultItemsAdded?: postItemsAddedFunction;
  public listUpdates?: listUpdatesFunction;
  public afterListCreated?: listUpdatesFunction;
  public permissions?: GroupMeta[];
  public getConfig?: () => any;

  constructor(title: string) {
    this.title = title;
    this.fields = [];
    this.defaultItems = [];
  }

  public static version: '0.1.4';
}

export class GroupMeta {
  name: string;
  permissions: [string];
  desc?: string = '';
}

export class FieldMeta {
  public markup: markupFunction | string;
  public name: string;
  public type?: SP.FieldType;
  public flags?: number = 0;
  public multiValue?: boolean = false;
  public legacyName?: string | null;
  public title?: string | null;
  public post?: postFunction;
  public inDefaultView?: boolean = false;
  public addOptions?: SP.AddFieldOptions = SP.AddFieldOptions.addFieldInternalNameHint | SP.AddFieldOptions.addToAllContentTypes
}

export class FieldLinkMeta {
  public name: string;
  public hidden?: boolean = null;
}

export class CTypeMeta {
  public name: string;
  public parentCtypeId: string;
  public fields: FieldLinkMeta[];
  public group?: string;
  public description?: string;
  public jsLink?: string;
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

export declare type itemsFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<Array<{ [key: string]: any }>>;
export declare type postItemsAddedFunction = (list: SP.List, dal: ListApi, items: SP.ListItem[]) => JQuery.Promise<SP.ListItem[]>;
export type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
export type listUpdatesFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<any>;
export type postFunction = (field: SP.Field) => void;