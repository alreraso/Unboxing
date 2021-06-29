import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'controler index de unboxing '});
    }

}

export const indexController = new IndexController();