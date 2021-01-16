"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaSchema = {
    "type": "object",
    "required": ["name", "belaege"],
    "additionalProperties": false,
    "properties": {
        "id": {
            "type": "string",
            "maxLength": 45
        },
        "name": {
            "type": "string",
            "maxLength": 45
        },
        "belaege": {
            "type": "array",
            "maxItems": 10,
            "items": {
                "type": "string",
                "maxLength": 45
            }
        }
    }
};
