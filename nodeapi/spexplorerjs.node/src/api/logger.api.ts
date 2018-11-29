class Logger {
	version: '0.1';
	name: string;
	shouldLog: boolean = true;
	shouldDebug: boolean = true;
	shouldTrace: boolean = true;
	public constructor(name: string) {
		this.name = name;
	}

	public log(message: string) {
		this.shouldLog && console && console.log(message);
	}

	public debug(message: string) {
		// in IE console.debug not always available
		if (this.shouldDebug && console) {
			if (console.debug) {
				console.debug(message);
			} else if (console.log) {
				console.log(message);
			}
		}
	}

	public trace(message: string) {
		this.shouldTrace && console && console.trace(message);
	}
	public error(message: string) {
		console && console.error(message);
	}
}

//if (typeof window != 'undefined' && window['spexplorerjs']) {
//	window['spexplorerjs'].modules.logger = Logger;
//}
export { Logger };
