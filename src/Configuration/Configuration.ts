type WallChars = { x: string; y: string, c1: string, c2: string, c3: string, c4: string };
type SnakeChars = { head: string; bones: string };

export class Configuration {
    private _canvas = {
        width: 10,
        height: 10
    };

    private _snakeChar = {
        head: "o",
        bones: "*"
    };
    private _matrixChar = ".";
    private _foodChar = "°";
    private _wallChar = {
        x: "═",
        y: "║",
        c1: "╔",
        c2: "╗",
        c3: "╚",
        c4: "╝"
    };

    get canvas() {
        return this._canvas;
    }

    get snakeChar(): SnakeChars {
        return this._snakeChar;
    }

    get matrixChar(): string {
        return this._matrixChar;
    }

    get foodChar(): string {
        return this._foodChar;
    }


    get wallChar(): WallChars {
        return this._wallChar;
    }
}