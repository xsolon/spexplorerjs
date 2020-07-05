/// <reference types="sharepoint" />
import { ListMeta } from '../api/meta.api';
export declare function backupList(listDef: ListMeta, ctx: SP.ClientContext, localFolder: string, settings: any): JQuery.Promise<void>;
export declare function restoreList(listDef: ListMeta, ctx: SP.ClientContext, localFolder: string, settings: any): JQuery.Promise<void>;
export declare function restoreLists(ctx: SP.ClientContext, settings: any, sourceSettings: any): void;
export declare function buildWebSchema(settings: any): void;
