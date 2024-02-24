"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
class Score {
    _actorBehavior = {
        "Snake": {
            points: (current) => current + 10
        }
    };
    addPoints(actor) {
    }
}
exports.Score = Score;
