"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const MovementDirection_1 = require("../MovementDirection");
const Debug_1 = require("../../Utils/Debug");
const readline = require('readline');
class KeyBoardHandler {
    constructor() {
        this.keyboardEmitter = new events_1.EventEmitter();
    }
    start() {
        // Key events
        readline.emitKeypressEvents(process.stdin);
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
        }
        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c') {
                process.exit();
            }
            switch (key.name.toUpperCase()) {
                case 'W':
                case 'K':
                case 'UP':
                    this.keyboardEmitter.emit("keypress", MovementDirection_1.MovementDirection.UP);
                    break;
                case 'A':
                case 'H':
                case 'LEFT':
                    this.keyboardEmitter.emit("keypress", MovementDirection_1.MovementDirection.LEFT);
                    break;
                case 'S':
                case 'J':
                case 'DOWN':
                    this.keyboardEmitter.emit("keypress", MovementDirection_1.MovementDirection.DOWN);
                    break;
                case 'D':
                case 'L':
                case 'RIGHT':
                    this.keyboardEmitter.emit("keypress", MovementDirection_1.MovementDirection.RIGHT);
                    break;
                case 'B':
                    this.keyboardEmitter.emit("keypress", MovementDirection_1.MovementDirection.EXIT);
                    break;
            }
        });
    }
    get emitter() {
        return this.keyboardEmitter;
    }
}
class Keyboard {
    constructor() {
        this._x = -1;
        this._y = -1;
        this._handler = new KeyBoardHandler();
    }
    get handler() {
        return this._handler;
    }
    onKeypress(lambda, key) {
        if (!key) {
            this._handler.emitter.on("keypress", lambda);
        }
        else {
            this._handler.emitter.on("keypress", (keypress) => {
                if (keypress === key) {
                    lambda(key);
                }
            });
        }
    }
    start() {
        const that = this;
        this._handler.start();
        this.onKeypress((key) => {
            let x = 0;
            let y = 0;
            switch (key) {
                case MovementDirection_1.MovementDirection.RIGHT:
                    x++;
                    this._direction = MovementDirection_1.MovementDirection.RIGHT;
                    break;
                case MovementDirection_1.MovementDirection.LEFT:
                    x--;
                    this._direction = MovementDirection_1.MovementDirection.LEFT;
                    break;
                case MovementDirection_1.MovementDirection.UP:
                    y--;
                    this._direction = MovementDirection_1.MovementDirection.UP;
                    break;
                case MovementDirection_1.MovementDirection.DOWN:
                    y++;
                    this._direction = MovementDirection_1.MovementDirection.DOWN;
                    break;
                default:
                    x = -1;
                    y = -1;
                    break;
            }
            Debug_1.Debug.build()
                .addLog("Movement direction: ", this._direction.toString())
                .addLog("x:", x.toString())
                .addLog("Y:", y.toString());
            that._x = x;
            that._y = y;
        });
    }
    reset() {
        this._x = -1;
        this._y = -1;
    }
    isModified() {
        return this._x !== -1 || this._y !== -1;
    }
    get coordinate() {
        return { x: this._x, y: this._y };
    }
    get direction() {
        return this._direction;
    }
}
exports.Keyboard = Keyboard;
