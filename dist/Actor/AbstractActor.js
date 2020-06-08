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
const Debug_1 = require("../Utils/Debug");
const ActorCollision_1 = require("../ActorCollision");
class AbstractActor {
    constructor(configuration) {
        this.configuration = configuration;
        this._oldCoordinates = [];
        this.stackTrace = [];
        this._coordinates = new Array();
        this._collision = new ActorCollision_1.ActorCollision();
    }
    addHead(...coordinate) {
        coordinate.forEach((coordinate) => {
            this.coordinates.unshift(coordinate);
        });
    }
    addTail(...coordinate) {
        coordinate.forEach((coordinate) => {
            this.coordinates.push(coordinate);
        });
    }
    get head() {
        return this.coordinates.length > 0 ? this.coordinates[0] : null;
    }
    get tail() {
        return this.coordinates.length > 0 ? this.coordinates[this.coordinates.length - 1] : null;
    }
    removeTail() {
        return this.coordinates.pop();
    }
    getSymbol() {
        throw new Error("Method not implemented.");
    }
    dispose() {
        this._coordinates = new Array();
        this._oldCoordinates = new Array();
    }
    get coordinates() {
        return this._coordinates;
    }
    sumCoordinates(currentCoordinate, coordinate) {
        let head = currentCoordinate;
        return {
            y: head.y + coordinate.y,
            x: head.x + coordinate.x
        };
    }
    switchTailToHead(coordinate) {
        let head = this.head;
        // remove tail
        this.removeTail();
        if (head) {
            let newBone = this.sumCoordinates(head, coordinate);
            this.addHead(newBone);
        }
    }
    // take old state and restore it to current state
    startSandbox() {
        this._oldCoordinates = this.coordinates;
    }
    rollback() {
        this._coordinates = this._oldCoordinates;
    }
    get collision() {
        return this._collision;
    }
    start() {
        throw new Error("Method not implemented.");
    }
    draw(canvas) {
        throw new Error("Method not implemented.");
    }
}
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AbstractActor.prototype, "switchTailToHead", null);
exports.AbstractActor = AbstractActor;
