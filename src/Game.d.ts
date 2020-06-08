import { Canvas } from "./Canvas";
import { InputDevice } from "./Input/InputDevice";
import { Configuration } from "./Configuration/Configuration";
import { Actor } from "./Actor/Actor";
import { Debug } from "./Utils/Debug";
export declare type Coordinate = {
    x: number;
    y: number;
};
export interface GameActor {
    Snake: Actor;
    Food: Actor;
}
export interface GameService {
    canvas: Canvas;
    input: InputDevice;
    configuration: Configuration;
    Debug: Debug;
}
export declare class Game {
    readonly gameService: GameService;
    readonly gameActor: GameActor;
    constructor(gameService: GameService, gameActor: GameActor);
    static build(): Game;
    start(): void;
    private startMainLoop;
}
