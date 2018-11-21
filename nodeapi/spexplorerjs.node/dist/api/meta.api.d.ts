/// <reference types="sharepoint" />
import { ListDal } from "./list.api";
export declare class ListMeta {
    fields: FieldMeta[];
    listTemplate: number;
    title: string;
    defaultItems: any[] | itemsFunction;
    listUpdates?: listUpdatesFunction;
    permissions?: GroupMeta[];
    constructor(title: string);
    static version: '0.1.2';
}
export declare class GroupMeta {
    name: string;
    permissions: [string];
    desc?: string;
}
export declare class FieldMeta {
    markup: markupFunction | string;
    name: string;
    legacyName?: string | null;
    title?: string | null;
    post?: postFunction;
    inDefaultView?: boolean;
    addOptions?: SP.AddFieldOptions;
}
export declare var classBuilder: (list: ListMeta) => string;
export declare type itemsFunction = (list: SP.List, dal: ListDal) => JQuery.Promise<any[]>;
export declare type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
export declare type listUpdatesFunction = (list: SP.List, dal: ListDal) => Promise<any>;
export declare type postFunction = (field: SP.Field) => void;
