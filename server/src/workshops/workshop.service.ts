import { Injectable, } from '@nestjs/common';
import { Model, } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Workshop } from './interfaces/workshop.interface'
import {WorkshopDto} from './dto/workshop.dto'

@Injectable()
export class WorkshopService {
    constructor(@InjectModel('Workshop') private readonly workshopModel: Model<Workshop>) { }

    //fetching all workshops
    async getAll(): Promise<Workshop[]> {
        const workshops = await this.workshopModel.find().exec()
        return workshops
    }
    //fetching workshop by id
    async getWorkshopById(id): Promise<Workshop> {
        const workshop = await this.workshopModel.findById(id).exec()
        return workshop
    }
    //create workshop
    async createWorkshop(createWorkshopDto: WorkshopDto): Promise<Workshop> {
        const createdWorkshop = new this.workshopModel(createWorkshopDto);
        return createdWorkshop.save();
    }


}