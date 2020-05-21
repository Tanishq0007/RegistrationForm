import { Document } from 'mongoose';

export interface Workshop extends Document {
    readonly name: string;
    readonly month: string;
    readonly description: string;
    readonly image:string;
}