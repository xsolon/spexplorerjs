/// <reference types="sharepoint" />
/// <reference types="jquery" />


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

export declare type QueueStep = (item: any) => Promise<void>;
export declare type ArrayPromise = () => Promise<Array<any>>;
export declare class ListDal {
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
export declare class ListApi {
    version: '0.1.17';
    ctrace: Logger;
    ctx: SP.ClientContext;
    folderApi: FolderApi;
    constructor(ctx?: SP.ClientContext);
    ensureFields: (list: SP.List, fields: Array<FieldMeta>) => JQuery.Promise<void>;
    listExists(title: string): Promise<[boolean, SP.List]>;
    ensureCTypes(ctypes: CTypeMeta[], splist: SP.List): JQuery.Promise<SP.ContentType[]>;
    ensureList(meta: ListMeta): JQuery.Promise<SP.List>;
    createList(listTitle: any, templateType: any, web: any): JQuery.Promise<SP.List>;
    getMeta(listTitle: string, fieldNames: any): Promise<ListMeta>;
    setupForms: (tList: SP.List, scriptLink: string, htmlLink?: string) => JQuery.Promise<void>;
    addItems(gitems: Array<{
        [key: string]: any;
    }>, splist: SP.List, folderUrl?: string, pageNum?: number): JQuery.Promise<Array<SP.ListItem>>;
    getQuery(caml?: string, folder?: string): SP.CamlQuery;
    runAllQuery(query: SP.CamlQuery, splist: SP.List, limit?: number, trace?: Logger): JQuery.Promise<Array<SP.ListItem>>;
    getAll(splist: SP.List, caml?: string, folder?: string, limit?: number): JQuery.Promise<Array<SP.ListItem>>;
}
export declare class FolderApi {
    ctrace: Logger;
    ctx: SP.ClientContext;
    constructor(ctx?: SP.ClientContext);
    ensureAttachmentFolder(itemId: number, list: SP.List): JQuery.Promise<SP.Folder>;
    folderExists(serverRelativeUrl: string, web?: SP.Web): JQuery.Promise<SP.Folder | boolean>;
    pathSteps(path: string): Array<string>;
    createFolderInList: (name: string, parentFolderPath: string, list: SP.List) => JQuery.Promise<SP.Folder>;
    /**
       * returns folder (creating it and its path if necessary)
       * @param {string} serverRelativeUrl
       */
    ensureFolderInList(serverRelativeUrl: string, list: SP.List): JQuery.Promise<SP.Folder>;
    /**
     * upload a file: returns an promise<sp.file>
     * @param parentDir: SP.Folder where file will be uploaded
     * @param buffer: base64 encoded byte array
     * @param filename: name of the file to save in sharepoint
     * @param replaceInvalidChars : replace invalid charaters (for onpremises)
     */
    uploadFile(parentDir: SP.Folder, buffer: SP.Base64EncodedByteArray, filename: string, replaceInvalidChars?: boolean, createInfo?: SP.FileCreationInformation): JQuery.Promise<SP.File>;
}
export declare class WebApi {
    ctrace: Logger;
    ctx: SP.ClientContext;
    constructor(ctx: SP.ClientContext);
    ensureCTypes(ctypes: CTypeMeta[], web?: SP.Web): JQuery.Promise<SP.ContentType[]>;
    static GetApi(ctx: SP.ClientContext): WebApi;
}

export declare class Logger {
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
    hidden?: boolean;
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
export declare var tsClassBuilder: (list: ListMeta) => string;
export declare type itemsFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<Array<{
    [key: string]: any;
}>>;
export declare type postItemsAddedFunction = (list: SP.List, dal: ListApi, items: SP.ListItem[]) => JQuery.Promise<SP.ListItem[]>;
export declare type markupFunction = (ctx: SP.ClientContext, list: SP.List, spfields: SP.FieldCollection, lists: SP.ListCollection, web: SP.Web) => JQuery.Promise<string>;
export declare type listUpdatesFunction = (list: SP.List, dal: ListApi) => JQuery.Promise<any>;
export declare type postFunction = (field: SP.Field) => void;

export declare var version: string;
export declare type QueueStep<T> = (item: T) => Promise<void>;
export declare type ArrayPromise<T> = () => Promise<Array<T>>;
export declare type KeyFunc<T> = (item: T) => string;
export declare class pagewps {
    ctx: SP.ClientContext;
    lpm: SP.WebParts.LimitedWebPartManager;
    wps: {
        [id: string]: {
            wpd: SP.WebParts.WebPartDefinition;
            wp: SP.WebParts.WebPart;
        };
    };
}
export declare class funcs {
    constructor();
    /**
     * Divides array into an array of arrays where each sub array has no more than pageNum numer of items
     * @param array : array to be divided
     * @param pageNum : numer of items per sub array
     */
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
    processAsQueue: <T>(arr: T[] | ArrayPromise<T>, action: QueueStep<T>) => JQuery.Promise<void>;
    loadSpElem(elem: Array<any> | any, sptx?: SP.ClientRuntimeContext, caller?: any | null): JQuery.Promise<any>;
    removeScriptLink(ctx: SP.ClientContext, title: string, logger?: Logger): JQuery.Promise<void>;
    /**
     * Adds a script link to userCustomActions. If a match is found (by title) then a new record is not added
     * @param ctx SharePoint Client context
     * @param src src of the script link
     * @param title title of the script link
     * @param sequence sequence of the script link
     * @param logger logger
     */
    addScriptLink(ctx: SP.ClientContext, src: string, title: string, sequence?: number, logger?: Logger): JQuery.Promise<void>;
    setHomePage: (folderOrWeb: SP.Web | SP.Folder, url: string, logger?: Logger) => Promise<void>;
    addWebPart: (ctx: SP.ClientContext, serverRelativeFormUrl: string, wpXml: string, zone: string, position?: number) => JQuery.Promise<SP.WebParts.WebPartDefinition>;
    getPageWebParts(formUrl: string, ctx: SP.ClientContext): JQuery.Promise<pagewps>;
    setformJsLink: (formUrl: string, ctx: SP.ClientContext, bizJs: string) => Promise<any>;
    breakRoleInheritance: (securable: SP.SecurableObject, copyRoleAssignments: boolean, clearSubscopes: boolean) => JQuery.Promise<any>;
    getGroups(ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<{
        [key: string]: SP.Group;
    }>;
    ensureGroup(name: any, desc: any, ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<SP.Group>;
    addPermission: (ctx: SP.ClientContext, principalIn: any, permissions: any, securable: SP.SecurableObject, parentWeb: SP.Web | null, logger?: Logger) => any;
    ensureGroups(groups: Array<GroupMeta>, ctx: SP.ClientContext, securable?: SP.SecurableObject, logger?: Logger): JQuery.Promise<any>;
    createGroup(name: any, desc: any, ctx: SP.ClientContext, parentWeb: SP.Web | null, logger?: Logger): JQuery.Promise<SP.Group>;
    sendEmail(to: string | [string], body: string, subject: string, webUrl?: string): JQuery.Promise<any>;
    /**
     * returns table rows that contain the keyword FieldInternName. This identify legacy form fields in a SharePoint form
     * @returns object with properties that match the internal name of each field in the form. The propety value is the html table row
    */
    getFieldMap: () => any;
}
export declare var initExtensions: () => void;

export declare function backupNode(ctx: SP.ClientContext, List: SP.List | string, settings: any): Promise<void>;
export declare function backupList(listDef: ListMeta, ctx: SP.ClientContext, localFolder: string, settings: any): JQuery.Promise<void>;
export declare function restoreList(listDef: ListMeta, ctx: SP.ClientContext, localFolder: string, settings: any): JQuery.Promise<void>;
export declare function restoreLists(ctx: SP.ClientContext, settings: any, sourceSettings: any): void;
export declare function buildWebSchema(settings: any): void;

