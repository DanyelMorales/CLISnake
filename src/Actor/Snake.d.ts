import { AbstractActor } from "./AbstractActor";
import { Food } from "./Food";
import { GameService } from "../Game";
import { Canvas } from "../Canvas";
export declare class Snake extends AbstractActor {
    readonly gameService: GameService;
    readonly food: Food;
    constructor(gameService: GameService, food: Food);
    start(): void;
    eat(): void;
    move(): void;
    draw(canvas: Canvas): void;
}
