import { Coordinate } from "../Game";
import { Canvas } from "../Canvas";
export interface Actor {
    readonly stackTrace: Array<Array<Coordinate>>;
    getSymbol(): string;
    dispose(): any;
    head: Coordinate | null;
    tail: Coordinate | null;
    start(): any;
    draw(canvas: Canvas): any;
    coordinates: Array<Coordinate>;
    sumCoordinates(currentCoordinate: Coordinate, coordinate: Coordinate): Coordinate;
}
