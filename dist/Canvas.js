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
exports.Canvas = void 0;
const Debug_1 = require("./Utils/Debug");
class Canvas {
    configuration;
    view;
    _matrix;
    _initialized = false;
    constructor(configuration, view) {
        this.configuration = configuration;
        this.view = view;
    }
    createBackground() {
        for (let h = 0; h < this.height; h++) {
            this._matrix[h] = new Array();
            for (let w = 0; w < this.width; w++) {
                this._matrix[h][w] = this.configuration.matrixChar;
            }
        }
        this._initialized = true;
    }
    draw() {
        this.view.render(this);
    }
    get height() {
        return this.configuration.canvas.height;
    }
    get width() {
        return this.configuration.canvas.width;
    }
    get matrix() {
        return this._matrix;
    }
    addChar(char, coordinates) {
        if (!this.initialized || !this.matrix) {
            return;
        }
        let addCharToMatrix = (c) => {
            if (this.matrix[c.y]) {
                this.matrix[c.y][c.x] = char;
            }
        };
        if (coordinates instanceof Array) {
            coordinates.forEach((coords) => {
                addCharToMatrix(coords);
            });
        }
        else {
            addCharToMatrix(coordinates);
        }
    }
    get initialized() {
        return this._initialized;
    }
    dispose() {
        this._initialized = false;
        this._matrix = [];
    }
    start() {
        this.dispose();
    }
}
exports.Canvas = Canvas;
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Canvas.prototype, "draw", null);
