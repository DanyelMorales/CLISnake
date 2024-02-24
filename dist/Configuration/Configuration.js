"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    _canvas = {
        width: 10,
        height: 10
    };
    _snakeChar = {
        head: "o",
        bones: "*"
    };
    _matrixChar = ".";
    _foodChar = "°";
    _wallChar = {
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
    get snakeChar() {
        return this._snakeChar;
    }
    get matrixChar() {
        return this._matrixChar;
    }
    get foodChar() {
        return this._foodChar;
    }
    get wallChar() {
        return this._wallChar;
    }
}
exports.Configuration = Configuration;
