"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DB Access Component
// Import Mongodb
const mongodb_1 = __importDefault(require("mongodb"));
const index_1 = require("../index");
const MongoClient = mongodb_1.default.MongoClient;
function connect() {
    return new Promise((res, rej) => {
        MongoClient.connect(index_1.config.db, (err, client) => {
            if (err) {
                rej(new Error('Connection to MongoDB failed'));
            }
            else {
                const collection = client.db('wdsdb').collection('pizzas');
                res({ client, collection });
            }
        });
    });
}
// CREATE
exports.createPizza = (pizza) => {
    return connect().then(({ client, collection }) => {
        return new Promise((res, rej) => {
            collection.insertOne(pizza, { safe: true }, (err, result) => {
                if (err) {
                    console.log('MongoDB Insert Error: ' + err);
                    rej(500);
                }
                else {
                    res(result);
                }
            });
            client.close();
        });
    });
};
// READ
exports.readPizzas = () => {
    return connect().then(({ client, collection }) => {
        return new Promise((res, rej) => {
            collection.find().sort({ _id: -1 }).limit(5).toArray((err, pizzas) => {
                if (err) {
                    rej(500);
                }
                else {
                    res(pizzas);
                }
                client.close();
            });
        });
    });
};
// UPDATE
exports.updatePizza = (pizza) => {
    return connect().then(({ client, collection }) => {
        return new Promise((res, rej) => {
            collection.updateOne({ '_id': mongodb_1.default.ObjectId(pizza.id) }, { $set: { "name": pizza.name, 'belaege': pizza.belaege } }, (err, obj) => {
                if (err) {
                    console.log("MongoDB Update Error: " + err);
                    rej(500);
                }
                else {
                    res(obj);
                }
                client.close();
            });
        });
    });
};
// DELETE
exports.deletePizza = (id) => {
    return connect().then(({ client, collection }) => {
        return new Promise((res, rej) => {
            collection.deleteOne({ '_id': mongodb_1.default.ObjectId(id) }, (err, obj) => {
                if (err) {
                    console.log("MongoDB Delete Error: " + err);
                    rej(500);
                }
                else if (obj.result.n === 1) {
                    res(obj);
                }
                else if (obj.result.n === 0) {
                    console.log("MongoDB document not found: " + obj);
                    rej(404);
                }
                client.close();
            });
        });
    });
};
