"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = exports.debug = void 0;
const log4js_1 = require("log4js");
function debug(debugMode = "FULL") {
    return function (target, propertyKey, descriptor) {
        let methodName = `[${target.constructor.name}@${propertyKey}]`;
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
        };
        return descriptor;
    };
}
exports.debug = debug;
class Debug {
    static me;
    logger;
    static build() {
        if (!this.me) {
            this.me = new Debug();
        }
        return this.me;
    }
    constructor() {
        this.logger = (0, log4js_1.getLogger)();
        (0, log4js_1.configure)({
            appenders: { cheese: { type: "file", filename: "snake.log" } },
            categories: { default: { appenders: ["cheese"], level: "error" } }
        });
        this.logger.level = "debug";
    }
    logCoordinate(title, coordinate) {
        this.addLog(title, coordinate.map((c) => "[x=>" + c.x + ", y=>" + c.y + "]").join(" "));
    }
    addLog(title, value) {
        this.logger.debug(`[${title}] - ${value}`);
        return this;
    }
    debug(value) {
        this.addLog("[-]", value);
        return this;
    }
    display() {
        console.log('\x1Bc' + "Exited");
    }
}
exports.Debug = Debug;
