
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const gepentSchema = new Schema({
   Enter_Name: String
})

const gepentModel = mongoose.model('gepent', gepentSchema, 'gepent');
export default gepentModel;
