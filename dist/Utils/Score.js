"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    constructor() {
        this._actorBehavior = {
            "Snake": {
                points: (current) => current + 10
            }
        };
    }
    addPoints(actor) {
    }
}
exports.Score = Score;
