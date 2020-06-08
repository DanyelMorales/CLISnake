"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    constructor() {
        this._canvas = {
            width: 8,
            height: 8
        };
        this._snakeChar = "*";
        this._matrixChar = ".";
        this._foodChar = "°";
    }
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
}
exports.Configuration = Configuration;
