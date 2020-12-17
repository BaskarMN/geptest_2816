import { Request, Response } from 'express';
import {gepentDao} from '../dao/gepentDao';
import { CustomLogger } from '../config/Logger'
let gepent = new gepentDao();

export class gepentService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepentService.ts: GpCreate')
     const  gepentData = req.body;
     gepent.GpCreate(gepentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepentService.ts: GpCreate')
         callback(response);
         });
    }


}