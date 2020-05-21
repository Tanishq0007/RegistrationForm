import { Controller, Request, Post, UseGuards, Res, Body, ValidationPipe, HttpStatus, UnprocessableEntityException, Put, Get, Redirect, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/user/users.service';
@Controller('api/auth')
@ApiTags('Authentication Endpoints')
export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService) { }

    @Post('/login')
    async login(@Res() res, @Body(new ValidationPipe()) auth: LoginDto) {
        const token = await this.authService.authenticate(auth)
        
        return res.status(HttpStatus.OK).json(token)
    }
    @Get('/logout')
    async logout(@Request() req , @Res() res){
       req.logout();
       Redirect('/')
       return res.status(HttpStatus.OK).json('You are not logged in')    
    }
    
    @Post('/register')
    async register(@Res() res, @Body(new ValidationPipe()) userModel: RegisterDto) {
        const checkemail = await this.userService.findUserByEmail(userModel.email);

        if (checkemail) {
            throw new UnprocessableEntityException('Email Already Exist');
        }
        userModel.password = await this.authService.getHashPassword(userModel.password)
        const user = await this.userService.addUser(userModel);
        return res.status(HttpStatus.OK).json(user)
    }

}