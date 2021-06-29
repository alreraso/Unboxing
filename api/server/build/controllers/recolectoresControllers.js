"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recolectoresController = void 0;
class RecolectoresController {
    index(req, res) {
        res.json({ text: 'controler recolectores de unboxing ' });
    }
}
exports.recolectoresController = new RecolectoresController();
