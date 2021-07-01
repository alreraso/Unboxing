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
        this.router.get('/', recolectoresControllers_1.recolectoresController.list);
        this.router.post('/', recolectoresControllers_1.recolectoresController.create);
        this.router.put('/:id', recolectoresControllers_1.recolectoresController.update);
        this.router.delete('/:id', recolectoresControllers_1.recolectoresController.delete);
    }
}
const recolectoresRoutes = new RecolectoresRoutes();
exports.default = recolectoresRoutes.router;
