"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const AbstractActor_1 = require("./AbstractActor");
class Wall extends AbstractActor_1.AbstractActor {
    gameService;
    constructor(gameService) {
        super(gameService.configuration);
        this.gameService = gameService;
    }
    start() {
        this.dispose();
    }
    draw(canvas) {
        let height = this.configuration.canvas.height;
        let width = this.configuration.canvas.width;
        let yCoords = new Array();
        let xCoords = new Array();
        for (let x = 0; x < width; x++) {
            xCoords.push({
                x: x,
                y: 0
            });
            xCoords.push({
                x: x,
                y: height - 1
            });
        }
        for (let y = 0; y < height; y++) {
            yCoords.push({
                x: 0,
                y: y
            });
            yCoords.push({
                x: height - 1,
                y: y
            });
        }
        this.gameService.canvas.addChar(this.configuration.wallChar.y, yCoords);
        this.gameService.canvas.addChar(this.configuration.wallChar.x, xCoords);
        let corner1 = [{ x: 0, y: 0 }];
        let corner2 = [{ x: width - 1, y: 0 }];
        let corner3 = [{ x: 0, y: height - 1 }];
        let corner4 = [{ x: width - 1, y: height - 1 }];
        this.gameService.canvas.addChar(this.configuration.wallChar.c1, corner1);
        this.gameService.canvas.addChar(this.configuration.wallChar.c2, corner2);
        this.gameService.canvas.addChar(this.configuration.wallChar.c3, corner3);
        this.gameService.canvas.addChar(this.configuration.wallChar.c4, corner4);
        this.coordinates = corner1.concat(corner2).concat(corner3).concat(corner4).concat(yCoords).concat(xCoords);
    }
}
exports.Wall = Wall;
