import * as mongoose from 'mongoose';
import gepentModel from '../models/gepent';
import { CustomLogger } from '../config/Logger'


export class gepentDao {
    private gepent = gepentModel;
    constructor() { }
public GpCreate(gepentData, callback){
new CustomLogger().showLogger('info', 'Enter into gepentDao.ts: GpCreate')
let temp = new gepentModel(gepentData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from gepentDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}