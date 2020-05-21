import { Controller, Get, Res, HttpStatus, Param, Post, Body } from '@nestjs/common';
import {WorkshopService} from './workshop.service'
import {WorkshopDto} from './dto/workshop.dto'
@Controller('api/workshops')
export class WorkshopController {
    constructor(private workshopService : WorkshopService){}
    @Get()
    async findAll(@Res() res) {
        const workshops =await this.workshopService.getAll();
        return res.status(HttpStatus.OK).json(workshops);
    }
    @Get(':id')
    async findById(@Res() res , @Param(':id') id:String){
        const workshop = await this.workshopService.getWorkshopById(id)
        return res.status(HttpStatus.OK).json(workshop)
    }
    @Post()
    async createNewWorkshop(@Res() res , @Body() createWorkshopDto :WorkshopDto) {
        const newWorkshop = await this.workshopService.createWorkshop(createWorkshopDto)
        return res.status(HttpStatus.OK).json({
            message:'Workshop created successfully',
            newWorkshop
        })
    }
    
}