import { Coordinate } from "../Game";
export declare class Utils {
    static random(min: any, max: any): number;
    static randomCoordinate(height: any, width: any): Coordinate;
    static randomCoordinateExcludingCoordinates(excludeCoordinate: Array<Coordinate>, height: any, width: any): Coordinate;
}
