/// <reference types="sharepoint" />
import { Logger } from './logger.api';
import { funcs } from './utils.api';
import { ListApi, ListDal, FolderApi, WebApi } from './list.api';
export interface Ispexplorerjs {
    [key: string]: any;
    modules: {
        logger: new (name: string) => Logger;
        utils: new () => funcs;
        funcs: funcs;
        listapi: new (ctx?: SP.ClientContext) => ListApi;
        listdal: new (ctx?: SP.ClientContext) => ListDal;
        folderapi: new (ctx?: SP.ClientContext) => FolderApi;
        webapi: new (ctx?: SP.ClientContext) => WebApi;
        jQuery: JQueryStatic;
    };
}
