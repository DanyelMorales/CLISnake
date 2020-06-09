import {AbstractActor} from "./AbstractActor";
import {Utils} from "../Utils/Utils";
import {GameService} from "../Game";
import {Canvas} from "../Canvas";
import {Debug, debug} from "../Utils/Debug";

export class Food extends AbstractActor {

    constructor(readonly gameService: GameService) {
        super(gameService.configuration);
    }

    start() {
        this.create();
    }

    isEaten() {
        this.create();
    }

    @debug()
    private create() {
        Debug.build().logCoordinate("Coords before dispose", this.coordinates);
        this.dispose();
        let coordinate = Utils.randomCoordinate(this.configuration.canvas.height, this.configuration.canvas.width);
        this.addTail(coordinate);
        Debug.build().logCoordinate("Coords after disposes", this.coordinates);
    }

    @debug()
    draw(canvas: Canvas) {

        Debug.build().logCoordinate("Drawing food", this.coordinates);

        canvas.addChar(this.configuration.foodChar, this.coordinates);
    }

}