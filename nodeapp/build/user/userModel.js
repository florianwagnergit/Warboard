"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const index_1 = require("../index");
const MongoClient = mongodb_1.default.MongoClient;
function connect() {
    return new Promise((res, rej) => {
        MongoClient.connect(index_1.config.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, client) => {
            if (err) {
                rej(new Error('Connection to MongoDB failed'));
            }
            else {
                const collection = client.db('wdsdb').collection('users');
                res({ client, collection });
            }
        });
    });
}
exports.readUser = (user) => {
    return connect().then(({ client, collection }) => {
        return new Promise((res, rej) => {
            collection.findOne({ "username": user.username, "password": user.password }, (err, result) => {
                if (err || result === null) {
                    rej(err);
                }
                res(user);
            });
        });
    });
};
