"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_jwt_1 = __importDefault(require("express-jwt"));
const userController_1 = require("./userController");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/user/login', (req, res) => {
    userController_1.getUser(req.body).then((user) => {
        if (user) {
            const payload = user;
            delete payload.password;
            const token = jsonwebtoken_1.default.sign(payload, 'SDWsecretWDS');
            res.status(200).json(token);
        }
        else {
            res.status(401).json('unauthorized');
        }
    }).catch((error) => {
        res.status(401).json('unauthorized');
    });
});
exports.userRouter.get('/user/welcome', express_jwt_1.default({ secret: 'SDWsecretWDS' }), (req, res) => {
    // req.user property not working but console.log(req);
    res.header('content-type', 'text/plain');
    res.status(200).send('Welcome!');
});
