
import { Logger } from './logger.api';
import { funcs } from './utils.api';
import { ListApi, ListDal, FolderApi } from './list.api';
import jQuery = require('jquery');

if (typeof window !== 'undefined') {
  window['spexplorerjs'] = window['spexplorerjs'] || {
    version: '1.0.1',
    modules: {
      logger: Logger,
      utils: funcs,
      listapi: ListApi,
      listdal: ListDal,
      jQuery: jQuery
    }
  };
}

export interface spexplorerjs {
  [key: string]: any,
  modules: {
    logger: Logger,
    utils: funcs,
    listapi: ListApi,
    listdal: ListDal,
    jQuery: JQueryStatic
  }

}

interface Window {
  [key: string]: any,
  spexplorerjs: spexplorerjs
}
