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
const Collision_1 = require("./Collision");
class ActorCollision extends Collision_1.Collision {
    detectActorCollisions(mainActor, secondaryActor, useMainActorHead) {
        if (useMainActorHead) {
            return mainActor.head ? this.searchCoordinateInCoordinates(mainActor.head, secondaryActor.coordinates) : [];
        }
        return mainActor.coordinates.flatMap((c) => this.searchCoordinateInCoordinates(c, secondaryActor.coordinates));
    }
    detectActorCollision(mainActor, secondaryActor) {
        if (!mainActor.head) {
            Debug_1.Debug.build().debug("NOT HEAD , NO COLLISION");
            return false;
        }
        return this.detectActorCollisions(mainActor, secondaryActor, true).length > 0;
    }
    willActorHasACollision(mainActor, secondaryActor, coordinate) {
        let x = mainActor.sumCoordinates(mainActor.head, coordinate);
        return this.isCoordinateInCoordinates(x, secondaryActor.coordinates);
    }
}
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Boolean]),
    __metadata("design:returntype", Array)
], ActorCollision.prototype, "detectActorCollisions", null);
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Boolean)
], ActorCollision.prototype, "detectActorCollision", null);
__decorate([
    Debug_1.debug(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ActorCollision.prototype, "willActorHasACollision", null);
exports.ActorCollision = ActorCollision;
