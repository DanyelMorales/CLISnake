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
}