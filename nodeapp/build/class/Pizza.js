"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor() {
        this.name = 'Pizza ohne Belag';
        this.belaege = ['nichts...'];
    }
    getPizza() {
        return this;
    }
    getId() {
        return this._id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getBelaege() {
        return this.belaege;
    }
    setBelaege(belaege) {
        this.belaege = belaege;
    }
}
exports.default = Pizza;
