"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tags_routes_1 = __importDefault(require("@modules/tags/infra/http/routes/tags.routes"));
var forms_routes_1 = __importDefault(require("@modules/forms/infra/http/routes/forms.routes"));
var clients_routes_1 = __importDefault(require("@modules/clients/infra/http/routes/clients.routes"));
var sessions_routes_1 = __importDefault(require("@modules/clients/infra/http/routes/sessions.routes"));
var routes = express_1.Router();
routes.use('/tags', tags_routes_1.default);
routes.use('/forms', forms_routes_1.default);
routes.use('/clients', clients_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
