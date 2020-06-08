import {Actor} from "./Actor";
import {Coordinate} from "../Game";
import {Configuration} from "../Configuration/Configuration";
import {Collision} from "../Collision";
import {Canvas} from "../Canvas";
import {debug} from "../Utils/Debug";
import {ActorCollision} from "../ActorCollision";


export class AbstractActor implements Actor {

    private _oldCoordinates: Array<Coordinate> = [];
    readonly stackTrace: Array<Array<Coordinate>> = [];
    protected _coordinates: Array<Coordinate> = new Array<Coordinate>();
    private _collision: ActorCollision = new ActorCollision();

    constructor(
        protected configuration: Configuration) {
    }

    addHead(...coordinate: Coordinate[]) {
        coordinate.forEach((coordinate) => {
            this.coordinates.unshift(coordinate);
        });
    }

    addTail(...coordinate: Coordinate[]) {
        coordinate.forEach((coordinate) => {
            this.coordinates.push(coordinate);
        });
    }

    get head(): Coordinate | null {
        return this.coordinates.length > 0 ? this.coordinates[0] : null;
    }

    get tail(): Coordinate | null {
        return this.coordinates.length > 0 ? this.coordinates[this.coordinates.length - 1] : null;
    }

    removeTail() {
        return this.coordinates.pop();
    }

    getSymbol(): string {
        throw new Error("Method not implemented.");
    }

    dispose() {
        this._coordinates = new Array<Coordinate>();
        this._oldCoordinates = new Array<Coordinate>();
    }

    get coordinates(): Array<Coordinate> {
        return this._coordinates;
    }

    sumCoordinates(currentCoordinate: Coordinate, coordinate: Coordinate): Coordinate {
        let head = currentCoordinate;
        return {
            y: head.y + coordinate.y,
            x: head.x + coordinate.x
        };
    }

    @debug()
    protected switchTailToHead(coordinate: Coordinate) {
        let head = this.head;
        // remove tail
        this.removeTail();
        if (head) {
            let newBone = this.sumCoordinates(head, coordinate);
            this.addHead(newBone);
        }
    }


    // take old state and restore it to current state
    protected startSandbox() {
        this._oldCoordinates = this.coordinates;
    }

    protected rollback() {
        this._coordinates = this._oldCoordinates;
    }

    get collision(): ActorCollision {
        return this._collision;
    }

    start() {
        throw new Error("Method not implemented.");
    }

    draw(canvas: Canvas) {
        throw new Error("Method not implemented.");
    }
}
