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
exports.Food = void 0;
const AbstractActor_1 = require("./AbstractActor");
const Utils_1 = require("../Utils/Utils");
const Canvas_1 = require("../Canvas");
const Debug_1 = require("../Utils/Debug");
class Food extends AbstractActor_1.AbstractActor {
    gameService;
    constructor(gameService) {
        super(gameService.configuration);
        this.gameService = gameService;
    }
    start() {
        this.create();
    }
    isEaten(excludeCoordinate) {
        this.create(excludeCoordinate);
    }
    create(excludeCoordinate) {
        Debug_1.Debug.build().logCoordinate("Coords before dispose", this.coordinates);
        this.dispose();
        let coordinate = null;
        if (excludeCoordinate && excludeCoordinate.length > 0) {
            coordinate = Utils_1.Utils.randomCoordinateExcludingCoordinates(excludeCoordinate, this.configuration.canvas.height, this.configuration.canvas.width);
        }
        else {
            coordinate = Utils_1.Utils.randomCoordinate(this.configuration.canvas.height, this.configuration.canvas.width);
        }
        this.addTail(coordinate);
        Debug_1.Debug.build().logCoordinate("Coords after disposes", this.coordinates);
    }
    draw(canvas) {
        Debug_1.Debug.build().logCoordinate("Drawing food", this.coordinates);
        canvas.addChar(this.configuration.foodChar, this.coordinates);
    }
}
exports.Food = Food;
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Food.prototype, "create", null);
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Canvas_1.Canvas]),
    __metadata("design:returntype", void 0)
], Food.prototype, "draw", null);
