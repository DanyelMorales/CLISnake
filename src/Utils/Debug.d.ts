import { Coordinate } from "../Game";
export declare type DebugMode = "FULL" | "ENTERING" | "EXITING" | "RETURNED";
export declare function debug(debugMode?: DebugMode): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare class Debug {
    static me: Debug;
    private logger;
    static build(): Debug;
    private constructor();
    logCoordinate(title: string, coordinate: Coordinate[]): void;
    addLog(title: string, value: string): this;
    debug(value: string): this;
    display(): void;
}
