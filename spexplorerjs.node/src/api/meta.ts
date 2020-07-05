// 2020-04-21 - tsClassBuilder: support for null parameter in setter template
// 2020-03-27 - FieldMeta: added flags(variable to store attributes, not used internally), ListMeta: getConfig (variable to store a function, not used internally)
// 2020-03-23 - FieldMeta: added multiValue
import { ListApi } from "./list";

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
export var tsClassBuilder = function (list: ListMeta): string {

  var ctypes: CTypeMeta[] = JSON.parse(JSON.stringify(list.ctypes || [])); // copy

  if (ctypes.length == 0) {
    //@ts-ignore
    ctypes.push({
      name: '',
      fields: list.fields,
    });
  }
  var fields: { [key: string]: string } = {};
  list.fields.forEach((f) => {
    var sType = "string"
    if (f.type == SP.FieldType.user) {
      sType = 'SP.FieldUserValue';
    }
    else if (f.type == SP.FieldType.lookup) {
      sType = 'SP.FieldLookupValue';
    }
    else if (f.type == SP.FieldType.boolean) {
      sType = 'boolean';
    }
    else if (f.type == SP.FieldType.dateTime) {
      sType = 'Date';
    }

    if (f.multiValue) {
      sType += '[]';
    }
    var tmp = `${f.name}(val?: ${sType}): ${sType} {
    var me = this;
    if (arguments.length) {
      me.li.set_item('${f.name}', val);
    }
    var res: ${sType} = me.li.get_item('${f.name}');
    return res;
  }

`;
    //fields.push( );
    fields[f.name] = tmp;
  });

  var res = '/// <reference types="sharepoint" />';
  ctypes.forEach((c) => {

    var ctypeFields = [];
    c.fields.forEach((f) => {
      ctypeFields.push(fields[f.name]);
    });

    var className = `${list.title.replace(/ /g, '')}${c.name.replace(/ /g, '')}Type`;
    res += `
export class ${className} {
  li: SP.ListItem;
  constructor(li?: SP.ListItem) {
    if (li)
      this.li = li;
  }
  spitem(li?: SP.ListItem): SP.ListItem {
    if (li)
      this.li = li;
    return this.li;
  }
  update():void { this.li.update(); }
  id(val?: number): number{
    var me = this;
    if (arguments.length) {
      me.li.set_item('ID', val);
    }
    var res: number = me.li.get_item('ID');
    return res;
  }
  title (val?: string): string {
    var me = this;
    if (arguments.length) {
      me.li.set_item('Title', val);
    }
    var res: string = me.li.get_item('Title');
    return res;
  }
  FileLeafRef(): string {
    var me = this;
    var res: string = me.li.get_item('FileLeafRef');
    return res;
  }
  FileRef(): string {
    var me = this;
    var res: string = me.li.get_item('FileRef');
    return res;
  }
  FileDirRef(): string {
    var me = this;
    var res: string = me.li.get_item('FileDirRef');
    return res;
  }
  Created(val?: Date): Date {
      if (arguments.length) {
          this.li.set_item('Created', val);
      }
      var res: Date = this.li.get_item('Created');
      return res;
  }
  Modified(val?: Date): Date {
      if (arguments.length) {
          this.li.set_item('Modified', val);
      }
      var res: Date = this.li.get_item('Modified');
      return res;
  }
  Editor(val?: SP.FieldUserValue): SP.FieldUserValue {
      if (arguments.length) {
          this.li.set_item('Editor', val);
      }
      var res: SP.FieldUserValue = this.li.get_item('Editor');
      return res;
  }
  Author(val?: SP.FieldUserValue): SP.FieldUserValue {
      if (arguments.length) {
          this.li.set_item('Author', val);
      }
      var res: SP.FieldUserValue = this.li.get_item('Author');
      return res;
  }
  Attachments(): boolean {
    return this.li.get_item('Attachments');
  }  
  Author(): SP.FieldUserValue {
    var res: SP.FieldUserValue = this.li.get_item('Author');
    return res;
  }
  ${ctypeFields.join(' ')}
  public static FromArray(spArray: SP.ListItem[]): Array<${className}> {
    var result = [];
    (spArray || []).forEach((li) => {
        result.push(new ${className}(li));
    });
    return result;
  };
  public static FromCollection(spCollection: SP.ListItemCollection): Array<${className}> {
    var result = [];
    if (spCollection) {
      var le = spCollection.getEnumerator();
      while (le.moveNext()) {
        var li = le.get_current();
        result.push(new ${className}(li));
      }
    }
    return result;
  };
}
`;

  });
  return res;
};


export declare type itemsFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<Array<{ [key: string]: any }>>;
export declare type postItemsAddedFunction = (list: SP.List, dal: ListApi, items: SP.ListItem[]) => JQuery.Promise<SP.ListItem[]>;
export type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
export type listUpdatesFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<any>;
export type postFunction = (field: SP.Field) => void;