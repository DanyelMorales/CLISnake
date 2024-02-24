type WallChars = {
    x: string;
    y: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
};
type SnakeChars = {
    head: string;
    bones: string;
};
export declare class Configuration {
    private _canvas;
    private _snakeChar;
    private _matrixChar;
    private _foodChar;
    private _wallChar;
    get canvas(): {
        width: number;
        height: number;
    };
    get snakeChar(): SnakeChars;
    get matrixChar(): string;
    get foodChar(): string;
    get wallChar(): WallChars;
}
export {};
