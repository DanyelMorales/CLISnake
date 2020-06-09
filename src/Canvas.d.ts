import { Configuration } from "./Configuration/Configuration";
import { Coordinate } from "./Game";
import { View } from "./View/View";
export interface ICanvas {
    matrix: string[][];
    dispose(): any;
    start(): any;
}
export declare class Canvas implements ICanvas {
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
    addChar(char: string, coordinates: Coordinate[] | Coordinate): void;
    readonly initialized: boolean;
    dispose(): void;
    start(): void;
}
