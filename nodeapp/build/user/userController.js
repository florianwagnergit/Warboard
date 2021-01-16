"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("./userModel");
exports.getUser = (user) => {
    return userModel_1.readUser(user);
};
