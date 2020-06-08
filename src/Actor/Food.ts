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
        let randomY = Utils.random(0, this.configuration.canvas.height);
        let randomX = Utils.random(0, this.configuration.canvas.width);
        let coordinate = {x: randomX, y: randomY};
        this.addTail(coordinate);
        Debug.build().logCoordinate("Coords after disposes", this.coordinates);
    }

    @debug()
    draw(canvas: Canvas) {

        Debug.build().logCoordinate("Drawing food", this.coordinates);

        canvas.addChar(this.configuration.foodChar, this.coordinates);
    }

}