declare class Logger {
    name: string;
    shouldLog: boolean;
    shouldDebug: boolean;
    shouldTrace: boolean;
    constructor(name: string);
    log(message: string): void;
    debug(message: string): void;
    trace(message: string): void;
    error(message: string): void;
}
export { Logger };
