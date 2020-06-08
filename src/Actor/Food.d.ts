import { AbstractActor } from "./AbstractActor";
import { GameService } from "../Game";
import { Canvas } from "../Canvas";
export declare class Food extends AbstractActor {
    readonly gameService: GameService;
    constructor(gameService: GameService);
    start(): void;
    isEaten(): void;
    private create;
    draw(canvas: Canvas): void;
}
