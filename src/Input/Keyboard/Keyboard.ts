import {EventEmitter} from "events";
import {MovementDirection} from "../MovementDirection";
import {InputDevice} from "../InputDevice";
import {Coordinate} from "../../Game";
import {Debug} from "../../Utils/Debug";

const readline = require('readline');

class KeyBoardHandler {
    private keyboardEmitter = new EventEmitter();

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
                    this.keyboardEmitter.emit("keypress", MovementDirection.UP);
                    break;
                case 'A':
                case 'H':
                case 'LEFT':
                    this.keyboardEmitter.emit("keypress", MovementDirection.LEFT);
                    break;
                case 'S':
                case 'J':
                case 'DOWN':
                    this.keyboardEmitter.emit("keypress", MovementDirection.DOWN);
                    break;
                case 'D':
                case 'L':
                case 'RIGHT':
                    this.keyboardEmitter.emit("keypress", MovementDirection.RIGHT);
                    break;
                case 'B':
                    this.keyboardEmitter.emit("keypress", MovementDirection.EXIT);
                    break;

            }
        });
    }

    get emitter(): EventEmitter {
        return this.keyboardEmitter;
    }

}

export class Keyboard implements InputDevice {

    private _x: number = -1;
    private _y: number = -1;
    private _direction: MovementDirection;
    private _handler: KeyBoardHandler = new KeyBoardHandler();

    constructor() {
    }


    get handler(): KeyBoardHandler {
        return this._handler;
    }

    onKeypress(lambda: (key) => any, key?: MovementDirection) {
        if (!key) {
            this._handler.emitter.on("keypress", lambda);
        } else {
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
                case MovementDirection.RIGHT:
                    x++;
                    this._direction = MovementDirection.RIGHT;
                    break;
                case MovementDirection.LEFT:
                    x--;
                    this._direction = MovementDirection.LEFT;
                    break;
                case MovementDirection.UP:
                    y--;
                    this._direction = MovementDirection.UP;
                    break;
                case MovementDirection.DOWN:
                    y++;
                    this._direction = MovementDirection.DOWN;
                    break;
                default:
                    x = -1;
                    y = -1;
                    break;
            }


            Debug.build()
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

    get coordinate(): Coordinate {
        return {x: this._x, y: this._y};
    }

    get direction(): MovementDirection {
        return this._direction;
    }
}