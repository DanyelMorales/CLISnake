import { Actor } from "./Actor";
import { Coordinate } from "../Game";
import { Configuration } from "../Configuration/Configuration";
import { Canvas } from "../Canvas";
import { ActorCollision } from "../ActorCollision";
export declare class AbstractActor implements Actor {
    protected configuration: Configuration;
    private _oldCoordinates;
    readonly stackTrace: Array<Array<Coordinate>>;
    protected _coordinates: Array<Coordinate>;
    private _collision;
    constructor(configuration: Configuration);
    addHead(...coordinate: Coordinate[]): void;
    addTail(...coordinate: Coordinate[]): void;
    readonly head: Coordinate | null;
    readonly tail: Coordinate | null;
    removeTail(): Coordinate;
    getSymbol(): string;
    dispose(): void;
    readonly coordinates: Array<Coordinate>;
    sumCoordinates(currentCoordinate: Coordinate, coordinate: Coordinate): Coordinate;
    protected switchTailToHead(coordinate: Coordinate): void;
    protected startSandbox(): void;
    protected rollback(): void;
    readonly collision: ActorCollision;
    start(): void;
    draw(canvas: Canvas): void;
}
