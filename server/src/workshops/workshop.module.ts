import { Module } from '@nestjs/common';
import { WorkshopController } from './workshop.controller';
import { WorkshopService } from './workshop.service'
import { MongooseModule } from '@nestjs/mongoose';
import {WorkshopSchema} from './schema/workshop.schema'
@Module({
    imports:[MongooseModule.forFeature([{ name: 'Workshop', schema:WorkshopSchema  }])],
    controllers: [WorkshopController],
    providers: [WorkshopService],
    exports:[WorkshopService]
})
export class WorkshopModule {};