import { Request, Response } from 'express';

class ConjuntosController {

    public index(req: Request, res: Response) {
        res.json({text: 'controler conjutnos de unboxing '});
    }

}

export const conjuntosController = new ConjuntosController();