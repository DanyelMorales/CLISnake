"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Canvas_1 = require("./Canvas");
const Configuration_1 = require("./Configuration/Configuration");
const Keyboard_1 = require("./Input/Keyboard/Keyboard");
const Snake_1 = require("./Actor/Snake");
const Food_1 = require("./Actor/Food");
const Cli_1 = require("./View/Cli");
const Debug_1 = require("./Utils/Debug");
const SystemGuard_1 = require("./Utils/SystemGuard");
const Wall_1 = require("./Actor/Wall");
class Game {
    gameService;
    gameActor;
    constructor(gameService, gameActor) {
        this.gameService = gameService;
        this.gameActor = gameActor;
    }
    static build() {
        let view = new Cli_1.CliSnake();
        let configuration = new Configuration_1.Configuration();
        let canvas = new Canvas_1.Canvas(configuration, view);
        let keyboard = new Keyboard_1.Keyboard();
        let systemGuard = new SystemGuard_1.SystemGuard(keyboard, view);
        let debug = Debug_1.Debug.build();
        let gameService = {
            canvas: canvas,
            input: keyboard,
            configuration: configuration,
            Debug: debug,
            System: systemGuard
        };
        let wall = new Wall_1.Wall(gameService);
        let food = new Food_1.Food(gameService);
        let snake = new Snake_1.Snake(gameService, food, wall);
        let gameActors = {
            Food: food,
            Snake: snake,
            Wall: wall
        };
        let game = new Game(gameService, gameActors);
        return game;
    }
    start() {
        this.gameService.canvas.start();
        this.gameService.input.start();
        this.gameActor.Snake.start();
        this.gameActor.Food.start();
        this.gameActor.Wall.start();
        let intervalID = this.startMainLoop();
        this.gameService.System.start(intervalID);
    }
    startMainLoop() {
        return setInterval(() => {
            this.gameService.canvas.createBackground();
            this.gameActor.Wall.draw(this.gameService.canvas);
            this.gameActor.Food.draw(this.gameService.canvas);
            this.gameActor.Snake.draw(this.gameService.canvas);
            this.gameService.canvas.draw();
            this.gameService.input.reset();
            this.gameService.canvas.dispose();
        }, 50);
    }
}
exports.Game = Game;
