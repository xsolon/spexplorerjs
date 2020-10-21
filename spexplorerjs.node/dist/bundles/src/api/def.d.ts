/// <reference types="sharepoint" />
/// <reference types="jquery" />
import { Logger } from './logger';
import { funcs } from './utils';
import { ListApi, ListDal, FolderApi, WebApi } from './list';
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
