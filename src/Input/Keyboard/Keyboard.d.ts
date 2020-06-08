import { EventEmitter } from "events";
import { MovementDirection } from "../MovementDirection";
import { InputDevice } from "../InputDevice";
import { Coordinate } from "../../Game";
declare class KeyBoardHandler {
    private keyboardEmitter;
    start(): void;
    readonly emitter: EventEmitter;
}
export declare class Keyboard implements InputDevice {
    private _x;
    private _y;
    private _direction;
    private _handler;
    constructor();
    readonly handler: KeyBoardHandler;
    onKeypress(lambda: (key: any) => any, key?: MovementDirection): void;
    start(): void;
    reset(): void;
    isModified(): boolean;
    readonly coordinate: Coordinate;
    readonly direction: MovementDirection;
}
export {};
