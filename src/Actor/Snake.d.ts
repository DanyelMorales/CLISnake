import { AbstractActor } from "./AbstractActor";
import { Food } from "./Food";
import { GameService } from "../Game";
import { Canvas } from "../Canvas";
import { Wall } from "./Wall";
export declare class Snake extends AbstractActor {
    readonly gameService: GameService;
    readonly food: Food;
    readonly wall: Wall;
    constructor(gameService: GameService, food: Food, wall: Wall);
    start(): void;
    eat(): void;
    move(): void;
    draw(canvas: Canvas): void;
}
