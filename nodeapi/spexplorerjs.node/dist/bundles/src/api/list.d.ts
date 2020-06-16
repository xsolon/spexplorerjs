/// <reference types="sharepoint" />
import { Logger } from './logger';
import { FieldMeta, ListMeta, CTypeMeta } from './meta';
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
    ensureFields: (list: SP.List<any>, fields: FieldMeta[]) => JQuery.Promise<any, any, any>;
    listExists(title: string): Promise<[boolean, SP.List]>;
    ensureCTypes(ctypes: CTypeMeta[], splist: SP.List): JQuery.Promise<SP.ContentType[]>;
    ensureList(meta: ListMeta): JQuery.Promise<SP.List>;
    createList(listTitle: any, templateType: any, web: any): JQuery.Promise<SP.List>;
    getMeta(listTitle: string, fieldNames: any): Promise<ListMeta>;
    setupForms: (tList: SP.List<any>, scriptLink: string, htmlLink?: string) => JQuery.Promise<any, any, any>;
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
    createFolderInList: (name: string, parentFolderPath: string, list: SP.List<any>) => JQuery.Promise<SP.Folder, any, any>;
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
