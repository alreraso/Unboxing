import { Request, Response } from 'express';

class RecolectoresController {

    public index(req: Request, res: Response) {
        res.json({text: 'controler recolectores de unboxing '});
    }

}

export const recolectoresController = new RecolectoresController();