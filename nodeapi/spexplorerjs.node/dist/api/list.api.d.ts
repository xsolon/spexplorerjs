/// <reference types="sharepoint" />
import { Logger } from './logger.api';
import { FieldMeta, ListMeta, CTypeMeta } from './meta.api';
export declare type QueueStep = (item: any) => Promise<void>;
export declare type ArrayPromise = () => Promise<Array<any>>;
export declare class ListDal {
    version: '0.1.11';
    title: string;
    defaultQuery: string;
    ctx: SP.ClientContext;
    dal: ListApi;
    list: SP.List;
    constructor(title: string, defaultQuery?: string);
    ensureFolder(serverRelativeUrl: string): JQuery.Promise<SP.Folder>;
    getList(): SP.List;
    getItems(query?: string, folder?: string, limit?: number): JQuery.Promise<SP.ListItem[]>;
    addItems(items: Array<any>, folderUrl?: string): JQuery.Promise<Array<SP.ListItem>>;
    getItemById(id: number): JQuery.Promise<SP.ListItem>;
}
export declare class ListApi {
    version: '0.1.11';
    ctrace: Logger;
    ctx: SP.ClientContext;
    folderApi: FolderApi;
    constructor(ctx?: SP.ClientContext);
    ensureFields: (list: SP.List<any>, fields: FieldMeta[]) => JQuery.Promise<any, any, any>;
    listExists(title: string): Promise<[boolean, SP.List]>;
    ensureCTypes(ctypes: CTypeMeta[], splist: SP.List): JQueryPromise<SP.ContentType[]>;
    ensureList(meta: ListMeta): JQueryPromise<SP.List>;
    createList(listTitle: any, templateType: any, web: any): JQueryPromise<SP.List>;
    getMeta(listTitle: string, fieldNames: any): Promise<ListMeta>;
    setupForms: (tList: SP.List<any>, scriptLink: string, htmlLink?: string) => JQuery.Promise<any, any, any>;
    addItems(items: Array<any>, splist: SP.List, folderUrl?: string): JQuery.Promise<Array<SP.ListItem>>;
    getQuery(caml?: string, folder?: string): SP.CamlQuery;
    runAllQuery(query: SP.CamlQuery, splist: SP.List, limit?: number, trace?: Logger): JQuery.Promise<Array<SP.ListItem>>;
    getAll(splist: SP.List, caml: string, folder?: string, limit?: number): JQuery.Promise<Array<SP.ListItem>>;
}
export declare class FolderApi {
    ctrace: Logger;
    ctx: SP.ClientContext;
    constructor(ctx?: SP.ClientContext);
    folderExists(serverRelativeUrl: string, web?: SP.Web): JQuery.Promise<SP.Folder | boolean>;
    pathSteps(path: string): Array<string>;
    createFolderInList: (name: string, parentFolderPath: string, list: SP.List<any>) => JQuery.Promise<SP.Folder, any, any>;
    /**
       * returns folder (creating it and its path if necessary)
       * @param {string} serverRelativeUrl
       */
    ensureFolderInList(serverRelativeUrl: string, list: SP.List): JQuery.Promise<SP.Folder>;
}
