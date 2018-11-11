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
        this.inDefaultView = false;
    }
    return FieldMeta;
}());
exports.FieldMeta = FieldMeta;
exports.classBuilder = function (list) {
    var fieldStr = "";
    list.fields.forEach(function (field) {
        fieldStr += "public static " + field.name + " : string = \"" + field.name + "\";\n";
    });
    var template = "export class " + list.title + "Def {\n\t" + fieldStr + "\n}";
    return template;
};
//# sourceMappingURL=meta.api.js.map