import {Canvas} from "./Canvas";
import {InputDevice} from "./Input/InputDevice";
import {Configuration} from "./Configuration/Configuration";
import {Keyboard} from "./Input/Keyboard/Keyboard";
import {Snake} from "./Actor/Snake";
import {Actor} from "./Actor/Actor";
import {Food} from "./Actor/Food";
import {View} from "./View/View";
import {CliSnake} from "./View/Cli";
import {Debug} from "./Utils/Debug";
import {MovementDirection} from "./Input/MovementDirection";

export type Coordinate = {
    x: number, y: number
};

export interface GameActor {
    Snake: Actor,
    Food: Actor
}

export interface GameService {
    canvas: Canvas,
    input: InputDevice,
    configuration: Configuration,
    Debug: Debug
}

export class Game {

    constructor(readonly gameService: GameService, readonly gameActor: GameActor) {
    }

    static build() {
        let view: View = new CliSnake();
        let configuration: Configuration = new Configuration();
        let canvas: Canvas = new Canvas(configuration, view);
        let keyboard: Keyboard = new Keyboard();

        let debug: Debug = Debug.build();

        let gameService: GameService = {
            canvas: canvas,
            input: keyboard,
            configuration: configuration,
            Debug: debug
        };

        let food: Food = new Food(gameService);
        let snake: Snake = new Snake(gameService, food);

        let gameActors: GameActor = {
            Food: food,
            Snake: snake
        };
        let game: Game = new Game(gameService, gameActors);

        return game;
    }

    start() {

        this.gameService.canvas.start();
        this.gameService.input.start();
        this.gameActor.Snake.start();
        this.gameActor.Food.start();

        let intervalID = this.startMainLoop();
        this.gameService.Debug.start(intervalID, this.gameService.input);
    }

    private startMainLoop() {
        return setInterval(() => {
            this.gameService.canvas.createBackground();
            this.gameActor.Food.draw(this.gameService.canvas);
            this.gameActor.Snake.draw(this.gameService.canvas);
            this.gameService.canvas.draw();
            this.gameService.input.reset();
            this.gameService.canvas.dispose();
        }, 80);
    }
}