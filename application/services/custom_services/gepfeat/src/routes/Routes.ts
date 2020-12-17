import { Request, Response, NextFunction } from "express";
import { gepentController } from '../controller/gepentController';


export class Routes {
    private gepent: gepentController = new gepentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/gepent').post(this.gepent.GpCreate);
     }

}