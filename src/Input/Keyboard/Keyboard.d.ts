/// <reference types="node" />
import { EventEmitter } from "events";
import { MovementDirection } from "../MovementDirection";
import { InputDevice } from "../InputDevice";
import { Coordinate } from "../../Game";
declare class KeyBoardHandler {
    private keyboardEmitter;
    start(): void;
    get emitter(): EventEmitter;
}
export declare class Keyboard implements InputDevice {
    private _x;
    private _y;
    private _direction;
    private _handler;
    constructor();
    get handler(): KeyBoardHandler;
    onKeypress(lambda: (key: any) => any, key?: MovementDirection): void;
    start(): void;
    reset(): void;
    isModified(): boolean;
    get coordinate(): Coordinate;
    get direction(): MovementDirection;
}
export {};
