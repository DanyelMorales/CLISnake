import {AbstractActor} from "./AbstractActor";
import {Food} from "./Food";
import {Coordinate, GameService} from "../Game";
import {Canvas} from "../Canvas";
import {Debug, debug} from "../Utils/Debug";
import {Wall} from "./Wall";
import {Utils} from "../Utils/Utils";

export class Snake extends AbstractActor {

    constructor(readonly gameService: GameService, readonly food: Food, readonly wall: Wall) {
        super(gameService.configuration);
    }

    start() {
        let coordinate = Utils.randomCoordinate(this.configuration.canvas.height, this.configuration.canvas.width);
        let bones: Coordinate[] = this.createBones(2, coordinate, "x");
        this.coordinates = bones;
    }

    @debug()
    eat() {
        this.addHead(this.food.head);
        this.food.isEaten();
    }

    @debug()
    move() {
        if (this.collision.willActorHasACollision(this, this.wall, this.gameService.input.coordinate)) {
            this.gameService.System.kill();
        } else if (this.collision.willActorHasACollision(this, this, this.gameService.input.coordinate)) {
            this.gameService.System.kill();
        } else if (this.collision.willActorHasACollision(this, this.food, this.gameService.input.coordinate)) {
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
        canvas.addChar(this.gameService.configuration.snakeChar.bones, this.coordinates);
        canvas.addChar(this.gameService.configuration.snakeChar.head, this.coordinates[0]);
    }

}