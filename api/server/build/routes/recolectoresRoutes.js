"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recolectoresControllers_1 = require("../controllers/recolectoresControllers");
class RecolectoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', recolectoresControllers_1.recolectoresController.index);
    }
}
const recolectoresRoutes = new RecolectoresRoutes();
exports.default = recolectoresRoutes.router;
