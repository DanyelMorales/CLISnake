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
exports.AbstractActor = void 0;
const Debug_1 = require("../Utils/Debug");
const ActorCollision_1 = require("../ActorCollision");
class AbstractActor {
    configuration;
    _oldCoordinates = [];
    stackTrace = [];
    _coordinates = new Array();
    _collision = new ActorCollision_1.ActorCollision();
    constructor(configuration) {
        this.configuration = configuration;
    }
    createBones(numberOfBones, coordinate, axis) {
        let bones = [];
        bones.push(coordinate);
        let baseCoordinate = coordinate;
        for (let i = 0; i < numberOfBones; i++) {
            let x = 0;
            let y = 0;
            if (axis === "x") {
                x = baseCoordinate.x + i;
                y = baseCoordinate.y;
            }
            else if (axis === "y") {
                x = baseCoordinate.x;
                y = baseCoordinate.y + i;
            }
            else {
                x = baseCoordinate.x + i;
                y = baseCoordinate.y + i;
            }
            baseCoordinate = {
                x: x,
                y: y
            };
            bones.push(baseCoordinate);
        }
        return bones;
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
    set coordinates(value) {
        this._coordinates = value;
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
exports.AbstractActor = AbstractActor;
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AbstractActor.prototype, "switchTailToHead", null);
