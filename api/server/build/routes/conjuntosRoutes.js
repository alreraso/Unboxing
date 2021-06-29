"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conjuntosControllers_1 = require("../controllers/conjuntosControllers");
class ConjuntosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', conjuntosControllers_1.conjuntosController.index);
    }
}
const conjuntosRoutes = new ConjuntosRoutes();
exports.default = conjuntosRoutes.router;
