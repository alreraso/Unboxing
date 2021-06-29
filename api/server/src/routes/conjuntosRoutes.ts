import { Router } from 'express';
import {conjuntosController} from '../controllers/conjuntosControllers'

class ConjuntosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', conjuntosController.index);
    }

}

const conjuntosRoutes = new ConjuntosRoutes();
export default conjuntosRoutes.router;