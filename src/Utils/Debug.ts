import {MovementDirection} from "../Input/MovementDirection";
import {InputDevice} from "../Input/InputDevice";
import {configure, getLogger} from "log4js";
import {Coordinate} from "../Game";

export type DebugMode = "FULL" | "ENTERING" | "EXITING" | "RETURNED";

export function debug(debugMode: DebugMode = "FULL") {

    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        let methodName = `[${target.constructor.name}@${propertyKey}]`;
        let originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (debugMode === "FULL" || debugMode === "ENTERING") {
                Debug.build().debug(`[Entering] ${methodName}`);
            }

            let result = originalMethod.apply(this, args);
            if (debugMode === "FULL" || debugMode === "RETURNED") {
                Debug.build().debug(`[RETURN] ${methodName}  ${JSON.stringify(result) || 'NO VALUE RETURNED'}`);
            }
            if (debugMode === "FULL" || debugMode === "EXITING") {
                Debug.build().debug(`[Exiting] ${methodName}`);
            }
            return result;
        }
        return descriptor;
    }
}

export class Debug {

    static me: Debug;
    private logger;

    static build(): Debug {
        if (!this.me) {
            this.me = new Debug();
        }
        return this.me;
    }


    private constructor() {
        this.logger = getLogger();
        configure({
            appenders: {cheese: {type: "file", filename: "snake.log"}},
            categories: {default: {appenders: ["cheese"], level: "error"}}
        });
        this.logger.level = "debug";
    }

    logCoordinate(title: string, coordinate: Coordinate[]) {
        this.addLog(title, coordinate.map((c) => "[x=>" + c.x + ", y=>" + c.y + "]").join(" "));
    }

    addLog(title: string, value: string) {
        this.logger.debug(`[${title}] - ${value}`);
        return this;
    }

    debug(value: string) {
        this.addLog("[-]", value);
        return this;
    }

    display() {
        console.log('\x1Bc' + "Exited");
    }



}

