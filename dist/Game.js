"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Canvas_1 = require("./Canvas");
const Configuration_1 = require("./Configuration/Configuration");
const Keyboard_1 = require("./Input/Keyboard/Keyboard");
const Snake_1 = require("./Actor/Snake");
const Food_1 = require("./Actor/Food");
const Cli_1 = require("./View/Cli");
const Debug_1 = require("./Utils/Debug");
class Game {
    constructor(gameService, gameActor) {
        this.gameService = gameService;
        this.gameActor = gameActor;
    }
    static build() {
        let view = new Cli_1.CliSnake();
        let configuration = new Configuration_1.Configuration();
        let canvas = new Canvas_1.Canvas(configuration, view);
        let keyboard = new Keyboard_1.Keyboard();
        let debug = Debug_1.Debug.build();
        let gameService = {
            canvas: canvas,
            input: keyboard,
            configuration: configuration,
            Debug: debug
        };
        let food = new Food_1.Food(gameService);
        let snake = new Snake_1.Snake(gameService, food);
        let gameActors = {
            Food: food,
            Snake: snake
        };
        let game = new Game(gameService, gameActors);
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
    startMainLoop() {
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
exports.Game = Game;
