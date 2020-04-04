import { Logger } from './logger.api';
import { funcs } from './utils.api';
import { ListApi, ListDal } from './list.api';
export interface spexplorerjs {
    [key: string]: any;
    modules: {
        logger: Logger;
        utils: funcs;
        listapi: ListApi;
        listdal: ListDal;
        jQuery: JQueryStatic;
    };
}
