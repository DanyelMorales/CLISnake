import { Canvas } from "./Canvas";
import { InputDevice } from "./Input/InputDevice";
import { Configuration } from "./Configuration/Configuration";
import { Actor } from "./Actor/Actor";
import { Debug } from "./Utils/Debug";
import { SystemGuard } from "./Utils/SystemGuard";
import { Wall } from "./Actor/Wall";
export declare type Coordinate = {
    x: number;
    y: number;
};
export interface GameActor {
    Snake: Actor;
    Food: Actor;
    Wall: Wall;
}
export interface GameService {
    canvas: Canvas;
    input: InputDevice;
    configuration: Configuration;
    Debug: Debug;
    System: SystemGuard;
}
export declare class Game {
    readonly gameService: GameService;
    readonly gameActor: GameActor;
    constructor(gameService: GameService, gameActor: GameActor);
    static build(): Game;
    start(): void;
    private startMainLoop;
}
