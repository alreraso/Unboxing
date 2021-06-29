import { Router } from 'express';
import{recolectoresController}from'../controllers/recolectoresControllers'

class RecolectoresRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', recolectoresController.index);
    }

}

const recolectoresRoutes = new RecolectoresRoutes();
export default recolectoresRoutes.router;