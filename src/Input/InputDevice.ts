import {MovementDirection} from "./MovementDirection";
import {Coordinate} from "../Game";

export interface InputDevice {
    start();

    reset();

    isModified(): boolean;

    coordinate: Coordinate;

    onKeypress(lambda: (key) => any, key?: MovementDirection)

    readonly direction: MovementDirection;
}
