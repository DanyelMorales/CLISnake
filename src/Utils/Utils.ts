import {Coordinate} from "../Game";

export class Utils {
    static random(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }

    static randomCoordinate(height, width):Coordinate {
        let randomY = Utils.random(1, height - 2);
        let randomX = Utils.random(1, width - 2);

        return {x: randomX, y:randomY};
    }

    static randomCoordinateExcludingCoordinates( excludeCoordinate:Array<Coordinate>, height, width):Coordinate {
       let coordinates = Utils.randomCoordinate(height,width);
        for (let point = 0; point < excludeCoordinate.length; point++) {
            let excludePoint = excludeCoordinate[point];
            if(excludePoint.x === coordinates.x && excludePoint.y === coordinates.y ){
                return Utils.randomCoordinateExcludingCoordinates(excludeCoordinate, height,width);
            }
        }
       return coordinates;
    }
}