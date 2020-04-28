
import { Logger } from './logger';
import { funcs } from './utils';
import { ListApi, ListDal, FolderApi, WebApi } from './list';
import jQuery = require('jquery');

if (typeof window !== 'undefined') {
  window['spexplorerjs'] = window['spexplorerjs'] || {
    version: '1.0.3',
    modules: {
      logger: Logger,
      funcs : new funcs(),
      utils: funcs,
      listapi: ListApi,
      listdal: ListDal,
      folderapi: FolderApi,
      webapi: WebApi,
      jQuery: jQuery
    }
  };
}

export interface Ispexplorerjs {
  [key: string]: any,
  modules: {
    logger: new (name:string) => Logger,
    utils: new () => funcs,
    funcs: funcs,
    listapi: new (ctx?: SP.ClientContext) => ListApi,
    listdal: new (ctx?: SP.ClientContext) => ListDal,
    folderapi: new (ctx?: SP.ClientContext) => FolderApi,
    webapi: new (ctx?: SP.ClientContext) => WebApi,
    jQuery: JQueryStatic
  }

}

interface Window {
  [key: string]: any,
  spexplorerjs: Ispexplorerjs,
  spexplorerts: Ispexplorerjs
}
