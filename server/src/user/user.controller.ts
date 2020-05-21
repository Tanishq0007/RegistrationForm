import { Controller, Get, Res ,HttpStatus, Param, NotFoundException, UseGuards} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {UsersService} from './users.service'
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('User EndPoints')
@Controller('api/users')
@ApiBearerAuth()
export class UserController {
    constructor(private userService:UsersService){}

    @Get()
    async getAllUsers(@Res() res) {
        const users = await this.userService.findAll()
        return res.status(HttpStatus.OK).json(users)
    }
    @Get(':id')
    async getUserById(@Res() res , @Param('id') id:String ){
        const user = await this.userService.findUserById(id);
        if (!user) throw new NotFoundException('User does not exist ')
        return res.status(HttpStatus.OK).json(user)
    }
    @Get(':email')
    async getUserByEmail(@Res() res , @Param('email') email:String){
        const user = await this.userService.findUserByEmail(email);
        if (!user) throw new NotFoundException('User does not exist ')
        return res.status(HttpStatus.OK).json(user)
    }


}
