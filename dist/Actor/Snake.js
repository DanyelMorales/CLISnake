"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
const AbstractActor_1 = require("./AbstractActor");
const Canvas_1 = require("../Canvas");
const Debug_1 = require("../Utils/Debug");
const Utils_1 = require("../Utils/Utils");
class Snake extends AbstractActor_1.AbstractActor {
    gameService;
    food;
    wall;
    constructor(gameService, food, wall) {
        super(gameService.configuration);
        this.gameService = gameService;
        this.food = food;
        this.wall = wall;
    }
    start() {
        let coordinate = Utils_1.Utils.randomCoordinate(this.configuration.canvas.height, this.configuration.canvas.width);
        let bones = this.createBones(2, coordinate, "x");
        this.coordinates = bones;
    }
    eat() {
        this.addHead(this.food.head);
        this.food.isEaten(this.coordinates);
    }
    move() {
        if (this.collision.willActorHasACollision(this, this.wall, this.gameService.input.coordinate)) {
            this.gameService.System.kill();
        }
        else if (this.collision.willActorHasACollision(this, this, this.gameService.input.coordinate)) {
            this.gameService.System.kill();
        }
        else if (this.collision.willActorHasACollision(this, this.food, this.gameService.input.coordinate)) {
            this.eat();
        }
        else {
            this.switchTailToHead(this.gameService.input.coordinate);
        }
    }
    draw(canvas) {
        if (this.gameService.input.isModified()) {
            this.move();
        }
        Debug_1.Debug.build().logCoordinate("Snake draw", this.coordinates);
        canvas.addChar(this.gameService.configuration.snakeChar.bones, this.coordinates);
        canvas.addChar(this.gameService.configuration.snakeChar.head, this.coordinates[0]);
    }
}
exports.Snake = Snake;
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Snake.prototype, "eat", null);
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Snake.prototype, "move", null);
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Canvas_1.Canvas]),
    __metadata("design:returntype", void 0)
], Snake.prototype, "draw", null);
