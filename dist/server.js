"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (request, response) {
    return response.json({ message: 'Hello World2' });
});
app.post('/user', function (request, response) {
    var _a = request.body, name = _a.name, email = _a.email;
    var user = {
        name: name,
        email: email
    };
    return response.json(user);
});
app.listen(3333, function () {
    console.log(' Server started port 3333!');
});
