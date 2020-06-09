declare type WallChars = {
    x: string;
    y: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
};
declare type SnakeChars = {
    head: string;
    bones: string;
};
export declare class Configuration {
    private _canvas;
    private _snakeChar;
    private _matrixChar;
    private _foodChar;
    private _wallChar;
    readonly canvas: {
        width: number;
        height: number;
    };
    readonly snakeChar: SnakeChars;
    readonly matrixChar: string;
    readonly foodChar: string;
    readonly wallChar: WallChars;
}
export {};
