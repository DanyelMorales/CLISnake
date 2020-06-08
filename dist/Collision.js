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
const Debug_1 = require("./Utils/Debug");
class Collision {
    constructor() {
    }
    isCollided(coordinates, coordinates2) {
        return coordinates.x === coordinates2.x && coordinates.y === coordinates2.y;
    }
    searchCollision(coordinates, coordinates2) {
        let that = this;
        let _detectCollision = (myCoordinate) => {
            return coordinates.filter((coordinate) => that.isCollided(myCoordinate, coordinate));
        };
        return coordinates2.flatMap(_detectCollision);
    }
    searchCoordinateInCoordinates(myCoordinate, coordinates) {
        return coordinates.filter((coordinate) => myCoordinate.x === coordinate.x && myCoordinate.y === coordinate.y);
    }
    ;
    isCoordinateInCoordinates(myCoordinate, coordinates) {
        return this.searchCoordinateInCoordinates(myCoordinate, coordinates).length > 0;
    }
}
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array]),
    __metadata("design:returntype", Array)
], Collision.prototype, "searchCollision", null);
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], Collision.prototype, "searchCoordinateInCoordinates", null);
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], Collision.prototype, "isCoordinateInCoordinates", null);
exports.Collision = Collision;
