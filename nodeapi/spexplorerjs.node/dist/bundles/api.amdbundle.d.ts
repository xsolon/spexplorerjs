/// <reference types="sharepoint" />
declare module "logger" {
    class Logger {
        version: '0.2';
        name: string;
        shouldLog: boolean;
        shouldDebug: boolean;
        shouldTrace: boolean;
        constructor(name: string);
        log(message: any): void;
        debug(message: any): void;
        trace(message: any): void;
        error(message: any): void;
        static get(name: string): Logger;
    }
    export { Logger };
}
declare module "list" {
    import { Logger } from "logger";
    import { FieldMeta, ListMeta, CTypeMeta } from "meta";
    export type QueueStep = (item: any) => Promise<void>;
    export type ArrayPromise = () => Promise<Array<any>>;
    export class ListDal {
        version: '0.1.18';
        title: string;
        defaultQuery: string;
        ctx: SP.ClientContext;
        dal: ListApi;
        list: SP.List;
        constructor(title: string, defaultQuery?: string);
        ensureFolder(serverRelativeUrl: string): JQuery.Promise<SP.Folder>;
        getList(): SP.List;
        getItems(query?: string, folder?: string, limit?: number): JQuery.Promise<SP.ListItem[]>;
        addItems(items: Array<any>, folderUrl?: string, pageNum?: number): JQuery.Promise<Array<SP.ListItem>>;
        getItemById(id: number): JQuery.Promise<SP.ListItem>;
    }
    export class ListApi {
        version: '0.1.17';
        ctrace: Logger;
        ctx: SP.ClientContext;
        folderApi: FolderApi;
        constructor(ctx?: SP.ClientContext);
        ensureFields: (list: SP.List<any>, fields: FieldMeta[]) => any;
        listExists(title: string): Promise<[boolean, SP.List]>;
        ensureCTypes(ctypes: CTypeMeta[], splist: SP.List): JQuery.Promise<SP.ContentType[]>;
        ensureList(meta: ListMeta): JQuery.Promise<SP.List>;
        createList(listTitle: any, templateType: any, web: any): JQuery.Promise<SP.List>;
        getMeta(listTitle: string, fieldNames: any): Promise<ListMeta>;
        setupForms: (tList: SP.List<any>, scriptLink: string, htmlLink?: string) => any;
        addItems(gitems: Array<{
            [key: string]: any;
        }>, splist: SP.List, folderUrl?: string, pageNum?: number): JQuery.Promise<Array<SP.ListItem>>;
        getQuery(caml?: string, folder?: string): SP.CamlQuery;
        runAllQuery(query: SP.CamlQuery, splist: SP.List, limit?: number, trace?: Logger): JQuery.Promise<Array<SP.ListItem>>;
        getAll(splist: SP.List, caml?: string, folder?: string, limit?: number): JQuery.Promise<Array<SP.ListItem>>;
    }
    export class FolderApi {
        ctrace: Logger;
        ctx: SP.ClientContext;
        constructor(ctx?: SP.ClientContext);
        ensureAttachmentFolder(itemId: number, list: SP.List): JQuery.Promise<SP.Folder>;
        folderExists(serverRelativeUrl: string, web?: SP.Web): JQuery.Promise<SP.Folder | boolean>;
        pathSteps(path: string): Array<string>;
        createFolderInList: (name: string, parentFolderPath: string, list: SP.List<any>) => JQuery.Promise<SP.Folder, any, any>;
        ensureFolderInList(serverRelativeUrl: string, list: SP.List): JQuery.Promise<SP.Folder>;
        uploadFile(parentDir: SP.Folder, buffer: SP.Base64EncodedByteArray, filename: string, replaceInvalidChars?: boolean, createInfo?: SP.FileCreationInformation): JQuery.Promise<SP.File>;
    }
    export class WebApi {
        ctrace: Logger;
        ctx: SP.ClientContext;
        constructor(ctx: SP.ClientContext);
        ensureCTypes(ctypes: CTypeMeta[], web?: SP.Web): JQuery.Promise<SP.ContentType[]>;
        static GetApi(ctx: SP.ClientContext): WebApi;
    }
}
declare module "meta" {
    import { ListApi } from "list";
    export class ListMeta {
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
    export class GroupMeta {
        name: string;
        permissions: [string];
        desc?: string;
    }
    export class FieldMeta {
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
    export class FieldLinkMeta {
        name: string;
        hidden?: boolean;
    }
    export class CTypeMeta {
        name: string;
        parentCtypeId: string;
        fields: FieldLinkMeta[];
        group?: string;
        description?: string;
        jsLink?: string;
    }
    export var classBuilder: (list: ListMeta) => string;
    export var tsClassBuilder: (list: ListMeta) => string;
    export type itemsFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<Array<{
        [key: string]: any;
    }>>;
    export type postItemsAddedFunction = (list: SP.List, dal: ListApi, items: SP.ListItem[]) => JQuery.Promise<SP.ListItem[]>;
    export type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
    export type listUpdatesFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<any>;
    export type postFunction = (field: SP.Field) => void;
}
declare module "utils" {
    import { Logger } from "logger";
    import { GroupMeta } from "meta";
    export var version: string;
    export type QueueStep<T> = (item: T) => Promise<void>;
    export type ArrayPromise<T> = () => Promise<Array<T>>;
    export type KeyFunc<T> = (item: T) => string;
    export class pagewps {
        ctx: SP.ClientContext;
        lpm: SP.WebParts.LimitedWebPartManager;
        wps: {
            [id: string]: {
                wpd: SP.WebParts.WebPartDefinition;
                wp: SP.WebParts.WebPart;
            };
        };
    }
    export class funcs {
        constructor();
        pageArray(array: Array<any>, pageNum?: number): Array<Array<any>>;
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
        loadSpElem(elem: Array<any> | any, sptx?: SP.ClientRuntimeContext, caller?: any | null): JQuery.Promise<any>;
        removeScriptLink(ctx: SP.ClientContext, title: string, logger?: Logger): any;
        addScriptLink(ctx: SP.ClientContext, src: string, title: string, sequence?: number, logger?: Logger): any;
        setHomePage: (folderOrWeb: SP.Web | SP.Folder, url: string, logger?: Logger) => Promise<void>;
        addWebPart: (ctx: SP.ClientContext, serverRelativeFormUrl: string, wpXml: string, zone: string, position?: number) => JQuery.Promise<SP.WebParts.WebPartDefinition, any, any>;
        getPageWebParts(formUrl: string, ctx: SP.ClientContext): JQuery.Promise<pagewps>;
        setformJsLink: (formUrl: string, ctx: SP.ClientContext, bizJs: string) => Promise<any>;
        breakRoleInheritance: (securable: SP.SecurableObject, copyRoleAssignments: boolean, clearSubscopes: boolean) => JQuery.Promise<any, any, any>;
        getGroups(ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<{
            [key: string]: SP.Group;
        }>;
        ensureGroup(name: any, desc: any, ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<SP.Group>;
        addPermission: (ctx: SP.ClientContext, principalIn: any, permissions: any, securable: SP.SecurableObject, parentWeb: SP.Web, logger?: Logger) => any;
        ensureGroups(groups: Array<GroupMeta>, ctx: SP.ClientContext, securable?: SP.SecurableObject, logger?: Logger): JQuery.Promise<any>;
        createGroup(name: any, desc: any, ctx: SP.ClientContext, parentWeb: SP.Web | null, logger?: Logger): JQuery.Promise<SP.Group>;
        sendEmail(to: string | [string], body: string, subject: string, webUrl?: string): JQuery.Promise<any>;
        getFieldMap: () => any;
    }
    export var initExtensions: () => void;
}
declare module "def" {
    import { Logger } from "logger";
    import { funcs } from "utils";
    import { ListApi, ListDal, FolderApi, WebApi } from "list";
    interface Ispexplorerjs {
        [key: string]: any;
        modules: {
            logger: new (name: string) => Logger;
            utils: new () => funcs;
            funcs: funcs;
            listapi: new (ctx?: SP.ClientContext) => ListApi;
            listdal: new (title: string, defaultQuery?: string) => ListDal;
            folderapi: new (ctx?: SP.ClientContext) => FolderApi;
            webapi: new (ctx?: SP.ClientContext) => WebApi;
            jQuery: JQueryStatic;
        };
    }
    interface IWindow {
        [key: string]: any;
        spexplorerjs: Ispexplorerjs;
        spexplorerts: Ispexplorerjs;
    }
    export { Ispexplorerjs, IWindow };
}
