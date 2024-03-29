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
exports.CliSnake = void 0;
const Canvas_1 = require("../Canvas");
const Debug_1 = require("../Utils/Debug");
class CliSnake {
    render(matrix) {
        let rendered = matrix.matrix.map((e) => e.join(" ")).join("\n");
        Debug_1.Debug.build().debug("\n" + rendered);
        console.log('\x1Bc' + rendered);
    }
}
exports.CliSnake = CliSnake;
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Canvas_1.Canvas]),
    __metadata("design:returntype", void 0)
], CliSnake.prototype, "render", null);
