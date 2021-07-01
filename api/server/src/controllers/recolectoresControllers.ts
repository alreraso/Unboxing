import { Request, Response } from 'express';
import pool from '../database';

class RecolectoresController {

    public async list(req: Request, res: Response) {
        const conjutnos = await pool.query('SELECT * FROM recolectores');
        res.json({text: 'listando conjuntos'});
    }

    public async create(req: Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO recolectores set ?', [req.body]);  
        res.json({text: 'recolector creado en unboxing'});
    }

    public update(req: Request, res: Response) {
        res.json({text: 'recolector actualizado en unboxing' + req.params.id});
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'recolector borrado en unboxing'+ req.params.id});
    }

    

}

export const recolectoresController = new RecolectoresController();