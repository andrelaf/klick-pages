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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Tag_1 = __importDefault(require("@modules/tags/infra/typeorm/Tag"));
var Form = /** @class */ (function () {
    function Form() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Form.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Form.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Form.prototype, "tag_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tag_1.default; }),
        typeorm_1.JoinColumn({ name: 'tag_id' }),
        __metadata("design:type", Tag_1.default)
    ], Form.prototype, "tag", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Form.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Form.prototype, "updated_at", void 0);
    Form = __decorate([
        typeorm_1.Entity('forms')
    ], Form);
    return Form;
}());
exports.default = Form;
