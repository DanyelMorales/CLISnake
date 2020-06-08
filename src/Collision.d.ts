import { Coordinate } from "./Game";
export declare class Collision {
    constructor();
    isCollided(coordinates: Coordinate, coordinates2: Coordinate): boolean;
    searchCollision(coordinates: Coordinate[], coordinates2: Coordinate[]): Coordinate[];
    searchCoordinateInCoordinates(myCoordinate: any, coordinates: Coordinate[]): Coordinate[];
    isCoordinateInCoordinates(myCoordinate: any, coordinates: Coordinate[]): boolean;
}
