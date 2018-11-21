/// <reference types="sharepoint" />
declare module "logger.api" {
    class Logger {
        name: string;
        shouldLog: boolean;
        shouldDebug: boolean;
        shouldTrace: boolean;
        constructor(name: string);
        log(message: string): void;
        debug(message: string): void;
        trace(message: string): void;
        error(message: string): void;
    }
    export { Logger };
}
declare module "list.api" {
    import { Logger } from "logger.api";
    import { FieldMeta, ListMeta } from "meta.api";
    export type QueueStep = (item: any) => Promise<void>;
    export type ArrayPromise = () => Promise<Array<any>>;
    export class ListDal {
        version: '0.1.2';
        ctrace: Logger;
        ctx: SP.ClientContext;
        constructor(ctx: SP.ClientContext);
        ensureFields: (list: SP.List<any>, fields: FieldMeta[]) => JQuery.Promise<any, any, any>;
        listExists(title: string): Promise<[boolean, SP.List]>;
        ensureList(meta: ListMeta): Promise<any>;
        createList(listTitle: any, templateType: any, web: any): Promise<SP.List>;
        getMeta(listTitle: string, fieldNames: any): Promise<ListMeta>;
        setupForms: (tList: SP.List<any>, scriptLink: string, htmlLink?: string) => JQuery.Promise<any, any, any>;
        addItems(items: Array<any>, splist: SP.List, folderUrl?: string): JQuery.Promise<any>;
        getQuery(caml?: string, folder?: string): SP.CamlQuery;
        runAllQuery(query: SP.CamlQuery, splist: SP.List, limit?: number, trace?: Logger): JQuery.Promise<Array<SP.ListItem>>;
        getAll(splist: SP.List, caml: string, folder?: string, limit?: number): JQuery.Promise<Array<SP.ListItem>>;
    }
}
declare module "meta.api" {
    import { ListDal } from "list.api";
    export class ListMeta {
        fields: FieldMeta[];
        listTemplate: number;
        title: string;
        defaultItems: any[] | itemsFunction;
        listUpdates?: listUpdatesFunction;
        permissions?: GroupMeta[];
        constructor(title: string);
        static version: '0.1.2';
    }
    export class GroupMeta {
        name: string;
        permissions: [string];
        desc?: string;
    }
    export class FieldMeta {
        markup: markupFunction | string;
        name: string;
        legacyName?: string | null;
        title?: string | null;
        post?: postFunction;
        inDefaultView?: boolean;
        addOptions?: SP.AddFieldOptions;
    }
    export var classBuilder: (list: ListMeta) => string;
    export type itemsFunction = (list: SP.List, dal: ListDal) => JQuery.Promise<any[]>;
    export type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
    export type listUpdatesFunction = (list: SP.List, dal: ListDal) => Promise<any>;
    export type postFunction = (field: SP.Field) => void;
}
declare module "utils.api" {
    import { Logger } from "logger.api";
    import { GroupMeta } from "meta.api";
    export var version: string;
    export type QueueStep<T> = (item: T) => Promise<void>;
    export type ArrayPromise<T> = () => Promise<Array<T>>;
    export type KeyFunc<T> = (item: T) => string;
    export class funcs {
        constructor();
        arrayToDictionary<T>(array: Array<T>, getKey: KeyFunc<T>, forceUnique?: boolean): {
            [key: string]: T;
        };
        getParameterByName: (name: any, url?: any) => string;
        getPeoplePickerByName: (name: string) => SPClientPeoplePicker;
        collectionToDictionary<T>(spCollection: any, getKey: KeyFunc<T>, forceUnique?: boolean): {
            [key: string]: T;
        };
        collectionToArray: <T>(spCollection: any) => T[];
        processAsQueue: <T>(arr: T[] | ArrayPromise<T>, action: QueueStep<T>) => JQuery.Promise<void, any, any>;
        loadSpElem(elem: Array<any> | any, sptx: SP.ClientRuntimeContext, caller?: any | null): JQuery.Promise<any>;
        removeScriptLink(ctx: SP.ClientContext, title: string, logger?: Logger): JQuery.Deferred<any, any, any>;
        addScriptLink(ctx: SP.ClientContext, src: string, title: string, sequence?: number, logger?: Logger): JQuery.Promise<any, any, any>;
        setHomePage: (folderOrWeb: SP.Web | SP.Folder, url: string, logger?: Logger) => Promise<void>;
        addWebPart: (ctx: SP.ClientContext, serverRelativeFormUrl: string, wpXml: string, zone: string, position?: number) => JQuery.Promise<SP.WebParts.WebPartDefinition, any, any>;
        setformJsLink: (formUrl: string, ctx: SP.ClientContext, bizJs: string) => Promise<any>;
        breakRoleInheritance: (securable: SP.SecurableObject, copyRoleAssignments: boolean, clearSubscopes: boolean) => JQueryPromise<any>;
        getGroups(ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<any>;
        ensureGroup(name: any, desc: any, ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<SP.Group>;
        addPermission: (ctx: SP.ClientContext, principalIn: any, permissions: any, securable: SP.SecurableObject, parentWeb: SP.Web, logger?: Logger) => JQuery.Promise<any, any, any>;
        ensureGroups(groups: Array<GroupMeta>, ctx: SP.ClientContext, securable?: SP.SecurableObject, logger?: Logger): JQuery.Promise<any>;
        createGroup(name: any, desc: any, ctx: SP.ClientContext, parentWeb: SP.Web | null, logger?: Logger): JQuery.Promise<SP.Group>;
        sendEmail(to: string | [string], body: string, subject: string, webUrl?: string): JQuery.Promise<any>;
        getFieldMap: () => any;
    }
    export var initExtensions: () => void;
}
declare module "def.api" { }
