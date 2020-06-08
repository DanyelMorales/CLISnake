import {Coordinate} from "./Game";
import {debug} from "./Utils/Debug";

export class Collision {

    constructor() {
    }

    isCollided(coordinates: Coordinate, coordinates2: Coordinate): boolean {
        return coordinates.x === coordinates2.x && coordinates.y === coordinates2.y;
    }

    @debug()
    searchCollision(coordinates: Coordinate[], coordinates2: Coordinate[]): Coordinate[] {
        let that = this;
        let _detectCollision = (myCoordinate) => {
            return coordinates.filter((coordinate) => that.isCollided(myCoordinate, coordinate));
        };
        return coordinates2.flatMap(_detectCollision);
    }

    @debug()
    searchCoordinateInCoordinates(myCoordinate, coordinates: Coordinate[]) {
        return coordinates.filter((coordinate) =>
            myCoordinate.x === coordinate.x && myCoordinate.y === coordinate.y
        );
    };

    @debug()
    isCoordinateInCoordinates(myCoordinate, coordinates: Coordinate[]) {
        return this.searchCoordinateInCoordinates(myCoordinate, coordinates).length > 0;
    }
}