"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListMeta = /** @class */ (function () {
    function ListMeta(title) {
        this.title = title;
        this.fields = [];
        this.defaultItems = [];
    }
    return ListMeta;
}());
exports.ListMeta = ListMeta;
var GroupMeta = /** @class */ (function () {
    function GroupMeta() {
        this.desc = '';
    }
    return GroupMeta;
}());
exports.GroupMeta = GroupMeta;
var FieldMeta = /** @class */ (function () {
    function FieldMeta() {
        this.flags = 0;
        this.multiValue = false;
        this.inDefaultView = false;
        this.addOptions = SP.AddFieldOptions.addFieldInternalNameHint | SP.AddFieldOptions.addToAllContentTypes;
    }
    return FieldMeta;
}());
exports.FieldMeta = FieldMeta;
var FieldLinkMeta = /** @class */ (function () {
    function FieldLinkMeta() {
        this.hidden = null;
    }
    return FieldLinkMeta;
}());
exports.FieldLinkMeta = FieldLinkMeta;
var CTypeMeta = /** @class */ (function () {
    function CTypeMeta() {
    }
    return CTypeMeta;
}());
exports.CTypeMeta = CTypeMeta;
exports.classBuilder = function (list) {
    var fieldStr = "";
    list.fields.forEach(function (field) {
        fieldStr += "public static " + field.name + " : string = \"" + field.name + "\";\n";
    });
    var template = "export class " + list.title + "Def {\n\t" + fieldStr + "\n}";
    return template;
};
exports.tsClassBuilder = function (list) {
    var ctypes = JSON.parse(JSON.stringify(list.ctypes || [])); // copy
    if (ctypes.length == 0) {
        //@ts-ignore
        ctypes.push({
            name: '',
            fields: list.fields,
        });
    }
    var fields = {};
    list.fields.forEach(function (f) {
        var sType = "string";
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
        var tmp = f.name + "(val?: " + sType + "): " + sType + " {\n    var me = this;\n    if (arguments.length) {\n      me.li.set_item('" + f.name + "', val);\n    }\n    var res: " + sType + " = me.li.get_item('" + f.name + "');\n    return res;\n  }\n\n";
        //fields.push( );
        fields[f.name] = tmp;
    });
    var res = '/// <reference types="sharepoint" />';
    ctypes.forEach(function (c) {
        var ctypeFields = [];
        c.fields.forEach(function (f) {
            ctypeFields.push(fields[f.name]);
        });
        var className = "" + list.title.replace(/ /g, '') + c.name.replace(/ /g, '') + "Type";
        res += "\nexport class " + className + " {\n  li: SP.ListItem;\n  constructor(li?: SP.ListItem) {\n    if (li)\n      this.li = li;\n  }\n  spitem(li?: SP.ListItem): SP.ListItem {\n    if (li)\n      this.li = li;\n    return this.li;\n  }\n  id(val?: number): number{\n    var me = this;\n    if (arguments.length) {\n      me.li.set_item('ID', val);\n    }\n    var res: number = me.li.get_item('ID');\n    return res;\n  }\n  title (val?: string): string {\n    var me = this;\n    if (arguments.length) {\n      me.li.set_item('Title', val);\n    }\n    var res: string = me.li.get_item('Title');\n    return res;\n  }\n  FileLeafRef(): string {\n    var me = this;\n    var res: string = me.li.get_item('FileLeafRef');\n    return res;\n  }\n  FileRef(): string {\n    var me = this;\n    var res: string = me.li.get_item('FileRef');\n    return res;\n  }\n  FileDirRef(): string {\n    var me = this;\n    var res: string = me.li.get_item('FileDirRef');\n    return res;\n  }\n  " + ctypeFields.join(' ') + "\n  public static FromArray(spArray: SP.ListItem[]): Array<" + className + "> {\n    var result = [];\n    (spArray || []).forEach((li) => {\n        result.push(new " + className + "(li));\n    });\n    return result;\n  };\n  public static FromCollection(spCollection: SP.ListItemCollection): Array<" + className + "> {\n    var result = [];\n    if (spCollection) {\n      var le = spCollection.getEnumerator();\n      while (le.moveNext()) {\n        var li = le.get_current();\n        result.push(new " + className + "(li));\n      }\n    }\n    return result;\n  };\n}\n";
    });
    return res;
};
//# sourceMappingURL=meta.api.js.map