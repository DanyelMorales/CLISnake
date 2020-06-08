import { Configuration } from "./Configuration/Configuration";
import { Coordinate } from "./Game";
import { View } from "./View/View";
export declare class Canvas {
    readonly configuration: Configuration;
    readonly view: View;
    private _matrix;
    private _initialized;
    constructor(configuration: Configuration, view: View);
    createBackground(): void;
    draw(): void;
    readonly height: number;
    readonly width: number;
    readonly matrix: string[][];
    addChar(char: string, coordinates: Coordinate[]): void;
    detectCollision(coords: Coordinate): boolean;
    readonly initialized: boolean;
    dispose(): void;
    start(): void;
}
