
import { Logger } from './logger.api';
import { funcs } from './utils.api';
import { ListApi, ListDal } from './list.api';
import jQuery = require('jquery');

if (typeof window != 'undefined') {
	window['spexplorerjs'] = {
		modules: {
			logger: Logger,
			utils: funcs,
			listapi: ListApi,
			listdal: ListDal,
			jQuery: jQuery
		}
	};
}