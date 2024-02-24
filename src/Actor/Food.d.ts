import { AbstractActor } from "./AbstractActor";
import { Coordinate, GameService } from "../Game";
import { Canvas } from "../Canvas";
export declare class Food extends AbstractActor {
    readonly gameService: GameService;
    constructor(gameService: GameService);
    start(): void;
    isEaten(excludeCoordinate: Array<Coordinate>): void;
    private create;
    draw(canvas: Canvas): void;
}
