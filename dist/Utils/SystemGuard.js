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
exports.SystemGuard = void 0;
const MovementDirection_1 = require("../Input/MovementDirection");
const Debug_1 = require("./Debug");
const events_1 = require("events");
class SystemCanvas {
    _matrix = [];
    get matrix() {
        return this._matrix;
    }
    dispose() {
        this._matrix = new Array();
    }
    start() {
        this.dispose();
    }
}
class SystemGuard extends events_1.EventEmitter {
    input;
    view;
    results;
    mainLoopId;
    constructor(input, view) {
        super();
        this.input = input;
        this.view = view;
        this.results = new SystemCanvas();
        this.results.dispose();
    }
    restart() {
    }
    pause() {
    }
    start(sysId) {
        this.mainLoopId = sysId;
        this.input.onKeypress((k) => {
            this.kill();
        }, MovementDirection_1.MovementDirection.EXIT);
        return this;
    }
    kill() {
        this.results.matrix.push(["GAME OVER"]);
        this.emit("KILLED", this);
        clearInterval(this.mainLoopId);
        setTimeout(() => {
            this.postKill();
        }, 10);
    }
    postKill() {
        this.view.render(this.results);
    }
}
exports.SystemGuard = SystemGuard;
__decorate([
    (0, Debug_1.debug)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SystemGuard.prototype, "kill", null);
