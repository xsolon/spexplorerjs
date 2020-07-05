/// <reference path="../../refs/api/api.bundle.d.ts" />

import { Logger } from "logger.api";
import { funcs } from "utils.api";

interface Window {
	[key: string]: any,
	jQuery: any,
	mlef: {
		home: {},
		modules: {
			logger: Logger,
			utils: funcs,
			listapi: any,
			jQuery: any
		}
	};
}

declare global {
	interface Window {
		jQuery: any,
		spexplorerjs: {
			[key: string]: any,
			modules: {
				logger: Logger,
				utils: funcs,
				listapi: any,
				jQuery: any
			}
		};
	}
}