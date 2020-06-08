import {AbstractActor} from "./AbstractActor";
import {Food} from "./Food";
import {GameService} from "../Game";
import {Canvas} from "../Canvas";
import {Debug, debug} from "../Utils/Debug";

export class Snake extends AbstractActor {

    constructor(readonly gameService: GameService, readonly food: Food) {
        super(gameService.configuration);
    }

    start() {
        this.addHead({x: 0, y: 1})
    }

    @debug()
    eat() {
        this.addHead(this.food.head);
        this.food.isEaten();
    }

    @debug()
    move() {
        if (this.collision.willActorHasACollision(this, this.food, this.gameService.input.coordinate)) {
            this.eat();
        } else {
            this.switchTailToHead(this.gameService.input.coordinate);
        }
    }

    @debug()
    draw(canvas: Canvas) {
        if (this.gameService.input.isModified()) {
            this.move();
        }
        Debug.build().logCoordinate("Snake draw", this.coordinates);
        canvas.addChar(this.gameService.configuration.snakeChar, this.coordinates);
    }

}