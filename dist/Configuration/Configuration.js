"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    constructor() {
        this._canvas = {
            width: 10,
            height: 10
        };
        this._snakeChar = {
            head: "o",
            bones: "*"
        };
        this._matrixChar = ".";
        this._foodChar = "°";
        this._wallChar = {
            x: "═",
            y: "║",
            c1: "╔",
            c2: "╗",
            c3: "╚",
            c4: "╝"
        };
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
    get wallChar() {
        return this._wallChar;
    }
}
exports.Configuration = Configuration;
