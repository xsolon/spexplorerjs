
import { Logger } from './logger.api';
import { funcs } from './utils.api';
import { ListDal } from './list.api';
import jQuery = require('jquery');

if (typeof window != 'undefined') {
	window['spexplorerjs'] = {
		modules: {
			logger: Logger,
			utils: funcs,
			listapi: ListDal,
			jQuery: jQuery
		}
	};
}