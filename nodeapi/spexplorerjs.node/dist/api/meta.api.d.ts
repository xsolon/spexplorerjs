/// <reference types="sharepoint" />
import { ListApi } from "./list.api";
export declare class ListMeta {
    fields: FieldMeta[];
    ctypes: CTypeMeta[];
    listTemplate: number;
    title: string;
    defaultItems: Array<{
        [key: string]: any;
    }> | itemsFunction;
    afterDefaultItemsAdded?: postItemsAddedFunction;
    listUpdates?: listUpdatesFunction;
    afterListCreated?: listUpdatesFunction;
    permissions?: GroupMeta[];
    getConfig?: () => any;
    constructor(title: string);
    static version: '0.1.4';
}
export declare class GroupMeta {
    name: string;
    permissions: [string];
    desc?: string;
}
export declare class FieldMeta {
    markup: markupFunction | string;
    name: string;
    type?: SP.FieldType;
    flags?: number;
    multiValue?: boolean;
    legacyName?: string | null;
    title?: string | null;
    post?: postFunction;
    inDefaultView?: boolean;
    addOptions?: SP.AddFieldOptions;
}
export declare class FieldLinkMeta {
    name: string;
}
export declare class CTypeMeta {
    name: string;
    parentCtypeId: string;
    fields: FieldLinkMeta[];
    group?: string;
    description?: string;
    jsLink?: string;
}
export declare var classBuilder: (list: ListMeta) => string;
export declare type itemsFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<Array<{
    [key: string]: any;
}>>;
export declare type postItemsAddedFunction = (list: SP.List, dal: ListApi, items: SP.ListItem[]) => JQuery.Promise<SP.ListItem[]>;
export declare type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
export declare type listUpdatesFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<any>;
export declare type postFunction = (field: SP.Field) => void;
