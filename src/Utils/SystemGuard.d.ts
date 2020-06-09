import { View } from "../View/View";
import { ICanvas } from "../Canvas";
import { InputDevice } from "../Input/InputDevice";
import { EventEmitter } from "events";
export declare class SystemGuard extends EventEmitter {
    readonly input: InputDevice;
    readonly view: View;
    readonly results: ICanvas;
    private mainLoopId;
    constructor(input: InputDevice, view: View);
    restart(): void;
    pause(): void;
    start(sysId: any): this;
    kill(): void;
    postKill(): void;
}
