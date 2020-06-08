export class Configuration {
    private _canvas = {
        width: 8,
        height: 8
    };

    private _snakeChar = "*";
    private _matrixChar = ".";
    private _foodChar = "°";

    get canvas() {
        return this._canvas;
    }

    get snakeChar(): string {
        return this._snakeChar;
    }

    get matrixChar(): string {
        return this._matrixChar;
    }

    get foodChar(): string {
        return this._foodChar;
    }
}