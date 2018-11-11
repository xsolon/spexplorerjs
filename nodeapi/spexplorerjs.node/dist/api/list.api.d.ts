/// <reference types="sharepoint" />
import { Logger } from './logger.api';
import { FieldMeta, ListMeta } from './meta.api';
export declare type QueueStep = (item: any) => Promise<void>;
export declare type ArrayPromise = () => Promise<Array<any>>;
export declare class ListDal {
    ctrace: Logger;
    ctx: SP.ClientContext;
    constructor(ctx: SP.ClientContext);
    ensureFields: (list: SP.List<any>, fields: FieldMeta[]) => JQuery.Promise<any, any, any>;
    listExists(title: string): Promise<[boolean, SP.List]>;
    ensureList(meta: ListMeta): Promise<any>;
    createList(listTitle: any, templateType: any, web: any): Promise<SP.List>;
    getMeta(listTitle: string, fieldNames: any): Promise<ListMeta>;
    setupForms: (tList: SP.List<any>, scriptLink: string, htmlLink: string) => JQuery.Promise<any, any, any>;
    addItems(items: Array<any>, splist: SP.List, folderUrl?: string): JQuery.Promise<any>;
}
