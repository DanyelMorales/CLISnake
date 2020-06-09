import {View} from "../View/View";
import {ICanvas} from "../Canvas";
import {InputDevice} from "../Input/InputDevice";
import {MovementDirection} from "../Input/MovementDirection";
import {debug} from "./Debug";
import {EventEmitter} from "events";


class SystemCanvas implements ICanvas {
    private _matrix: string[][] = [];

    get matrix() {
        return this._matrix;
    }

    dispose() {
        this._matrix = new Array<Array<any>>();
    }

    start() {
        this.dispose();
    }

}

export class SystemGuard extends EventEmitter {

    readonly results: ICanvas;
    private mainLoopId: any;

    constructor(readonly input: InputDevice, readonly view: View) {
        super();
        this.results = new SystemCanvas();
        this.results.dispose();
    }

    restart() {

    }

    pause() {

    }

    start(sysId) {
        this.mainLoopId = sysId;
        this.input.onKeypress((k) => {
            this.kill();
        }, MovementDirection.EXIT);
        return this;
    }

    @debug()
    kill() {
        this.results.matrix.push(["GAME OVER"]);
        this.emit("KILLED", this);
        clearInterval(this.mainLoopId);
        setTimeout(() => {
            this.postKill();
        }, 10);
    }

    postKill() {
        this.view.render(this.results);
    }

}