import { MovementDirection } from "./MovementDirection";
import { Coordinate } from "../Game";
export interface InputDevice {
    start(): any;
    reset(): any;
    isModified(): boolean;
    coordinate: Coordinate;
    onKeypress(lambda: (key: any) => any, key?: MovementDirection): any;
    readonly direction: MovementDirection;
}
