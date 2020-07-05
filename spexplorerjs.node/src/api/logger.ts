class Logger {
  version: '0.2';
  name: string;
  shouldLog: boolean = true;
  shouldDebug: boolean = true;
  shouldTrace: boolean = true;
  public constructor(name: string) {
    this.name = name;
  }

  public log(message: any) {
    this.shouldLog && console && console.log(message);
  }

  public debug(message: any) {
    // in IE console.debug not always available
    if (this.shouldDebug && console) {
      if (console.debug) {
        console.debug(message);
      } else if (console.log) {
        console.log(message);
      }
    }
  }

  public trace(message: any) {
    this.shouldTrace && console && console.trace(message);
  }
  public error(message: any) {
    console && console.error(message);
  }

  public static get(name: string): Logger {
    return new Logger(name);
  }
}

//if (typeof window != 'undefined' && window['spexplorerjs']) {
//	window['spexplorerjs'].modules.logger = Logger;
//}
export { Logger };
