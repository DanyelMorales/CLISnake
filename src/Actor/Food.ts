import {AbstractActor} from "./AbstractActor";
import {Utils} from "../Utils/Utils";
import {Coordinate, GameService} from "../Game";
import {Canvas} from "../Canvas";
import {Debug, debug} from "../Utils/Debug";

export class Food extends AbstractActor {

    constructor(readonly gameService: GameService) {
        super(gameService.configuration);
    }

    start() {
        this.create();
    }

    isEaten(excludeCoordinate: Array<Coordinate>) {
        this.create(excludeCoordinate);
    }

    @debug()
    private create(excludeCoordinate?: Array<Coordinate>) {
        Debug.build().logCoordinate("Coords before dispose", this.coordinates);
        this.dispose();
        let coordinate = null;

        if (excludeCoordinate && excludeCoordinate.length > 0) {
            coordinate = Utils.randomCoordinateExcludingCoordinates(excludeCoordinate, this.configuration.canvas.height, this.configuration.canvas.width);
        } else {
            coordinate = Utils.randomCoordinate(this.configuration.canvas.height, this.configuration.canvas.width);
        }
        this.addTail(coordinate);
        Debug.build().logCoordinate("Coords after disposes", this.coordinates);
    }

    @debug()
    draw(canvas: Canvas) {

        Debug.build().logCoordinate("Drawing food", this.coordinates);

        canvas.addChar(this.configuration.foodChar, this.coordinates);
    }

}