/// <reference types="sharepoint" />
import { Logger } from './logger.api';
import { GroupMeta } from './meta.api';
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
    getPageWebParts(formUrl: string, ctx: SP.ClientContext): JQuery.Promise<pagewps>;
    setformJsLink: (formUrl: string, ctx: SP.ClientContext, bizJs: string) => Promise<any>;
    breakRoleInheritance: (securable: SP.SecurableObject, copyRoleAssignments: boolean, clearSubscopes: boolean) => JQueryPromise<any>;
    getGroups(ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<any>;
    ensureGroup(name: any, desc: any, ctx: SP.ClientContext, logger?: Logger): JQuery.Promise<SP.Group>;
    addPermission: (ctx: SP.ClientContext, principalIn: any, permissions: any, securable: SP.SecurableObject, parentWeb: SP.Web, logger?: Logger) => JQuery.Promise<any, any, any>;
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
