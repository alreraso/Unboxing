import { Router } from 'express';
import{recolectoresController}from'../controllers/recolectoresControllers'

class RecolectoresRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', recolectoresController.list);
        this.router.post('/', recolectoresController.create);
        this.router.put('/:id', recolectoresController.update);
        this.router.delete('/:id', recolectoresController.delete);

    }

}

const recolectoresRoutes = new RecolectoresRoutes();
export default recolectoresRoutes.router;