import {Configuration} from "./Configuration/Configuration";
import {Coordinate} from "./Game";
import {View} from "./View/View";
import {Debug, debug} from "./Utils/Debug";

export class Canvas {

    private _matrix: string[][];
    private _initialized: boolean = false;

    constructor(readonly configuration: Configuration, readonly view: View) {
    }

    createBackground() {
        for (let h = 0; h < this.height; h++) {
            this._matrix[h] = new Array();
            for (let w = 0; w < this.width; w++) {
                this._matrix[h][w] = this.configuration.matrixChar;
            }
        }
        this._initialized = true;
    }

    @debug()
    draw() {
        this.view.render(this);
    }

    get height(): number {
        return this.configuration.canvas.height;
    }

    get width(): number {
        return this.configuration.canvas.width;
    }

    get matrix(): string[][] {
        return this._matrix;
    }

    addChar(char: string, coordinates: Coordinate[]) {
        if (!this.initialized || !this.matrix) {
            return;
        }
        coordinates.forEach((coords) => {
            if (this.matrix[coords.y]) {
                this.matrix[coords.y][coords.x] = char;
            }
        });
    }

    detectCollision(coords: Coordinate): boolean {
        if (!this.initialized) {
            return false;
        }
        return this.matrix[coords.y][coords.x] !== this.configuration.matrixChar;
    }


    get initialized(): boolean {
        return this._initialized;
    }

    dispose() {
        this._initialized = false;
        this._matrix = [];
    }

    start() {
        this.dispose();
    }
}