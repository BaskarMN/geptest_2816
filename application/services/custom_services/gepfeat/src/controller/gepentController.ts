import { Request, Response } from 'express';
import { gepentService } from '../service/gepentService';
import { CustomLogger } from '../config/Logger'
let gepent = new gepentService();

export class gepentController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
gepent.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepentController.ts: GpCreate');
    })}


}