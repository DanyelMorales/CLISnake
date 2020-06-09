"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static randomCoordinate(height, width) {
        let randomY = Utils.random(1, height - 2);
        let randomX = Utils.random(1, width - 2);
        return { x: randomX, y: randomY };
    }
}
exports.Utils = Utils;
