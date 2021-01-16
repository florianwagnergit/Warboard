"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const pizzaSchema_1 = require("../schema/pizzaSchema");
const demoModel_1 = require("./demoModel");
const ajv = new ajv_1.default({ allErrors: true });
const isValid = ajv.addSchema(pizzaSchema_1.pizzaSchema, 'pizzaSchema');
exports.getPizzas = () => {
    return demoModel_1.readPizzas();
};
exports.removePizza = (id) => {
    // Check if id is valid id
    if (typeof id == "string" && id.length == 24) {
        return demoModel_1.deletePizza(id);
    }
    else {
        return new Promise((res, rej) => {
            rej(400);
        });
    }
};
exports.addPizza = (pizza) => {
    // Test if Pizza is valid Pizza
    if (isValid.validate('pizzaSchema', pizza)) {
        return demoModel_1.createPizza(pizza);
    }
    else {
        console.log('AJV invalid Pizza: ' + ajv.errorsText());
        return new Promise((res, rej) => {
            rej(400);
        });
    }
};
exports.changePizza = (pizza) => {
    if (isValid.validate('pizzaSchema', pizza)) {
        return demoModel_1.updatePizza(pizza);
    }
    else {
        console.log('AJV invalid Pizza: ' + ajv.errorsText());
        return new Promise((res, rej) => {
            rej(400);
        });
    }
};
