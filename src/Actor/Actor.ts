import {Coordinate} from "../Game";
import {Canvas} from "../Canvas";

export interface Actor {
    readonly stackTrace: Array<Array<Coordinate>>;

    getSymbol(): string;

    dispose();

    head: Coordinate | null;
    tail: Coordinate | null;

    start();
    draw(canvas: Canvas);
    coordinates: Array<Coordinate>;
    sumCoordinates(currentCoordinate: Coordinate, coordinate: Coordinate): Coordinate;
}