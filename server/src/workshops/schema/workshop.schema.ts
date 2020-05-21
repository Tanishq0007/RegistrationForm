import * as mongoose from 'mongoose';
export const WorkshopSchema = new mongoose.Schema({
    name: String,
    month: String,
    description: String,
    image: String
})  