declare class Logger {
    version: '0.2';
    name: string;
    shouldLog: boolean;
    shouldDebug: boolean;
    shouldTrace: boolean;
    constructor(name: string);
    log(message: any): void;
    debug(message: any): void;
    trace(message: any): void;
    error(message: any): void;
    static get(name: string): Logger;
}
export { Logger };
