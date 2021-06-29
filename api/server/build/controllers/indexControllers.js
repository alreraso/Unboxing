"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'controler index de unboxing ' });
    }
}
exports.indexController = new IndexController();
