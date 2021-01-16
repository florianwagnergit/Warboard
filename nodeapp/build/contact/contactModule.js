"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("./contactController");
exports.contactRouter = express_1.default.Router();
exports.contactRouter.post('/contact', (req, res) => {
    contactController_1.emailHandler(req.body).then(() => {
        res.header('content-type', 'application/json');
        res.status(200).end();
    }).catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});
