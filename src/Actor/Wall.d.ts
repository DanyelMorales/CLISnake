import { AbstractActor } from "./AbstractActor";
import { Canvas } from "../Canvas";
import { GameService } from "../Game";
export declare class Wall extends AbstractActor {
    readonly gameService: GameService;
    constructor(gameService: GameService);
    start(): void;
    draw(canvas: Canvas): void;
}
