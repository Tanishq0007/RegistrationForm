import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/users.service'
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { PassportModule } from '@nestjs/passport';
@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }
    private saltRounds = 10;

    async authenticate(authDetail:LoginDto){
        const user = await this.userService.findUserByEmail(authDetail.email)
        if (!user){
            throw new BadRequestException();
        }
        return this.createJwtPayload(user)
        
    }
    async getoken(){
    
    }
    async getHashPassword(password:String){
        return await bcrypt.hash(password, this.saltRounds)
    }
    async compareHash(password: String, hash: String): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
    async validateUserByJwt(payload:JwtPayload){
        let user = await this.userService.findUserById(payload.id)
        if(user){
            return user;
        } else {
            throw new UnauthorizedException();
        }

    }
    async createJwtPayload(user){
        let data : JwtPayload = {
            email: user.email,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            user_name:user.user_name
        }   
        let jwt = this.jwtService.sign(data);
        
        return {
            expiresIn:3600,
            token:jwt
        }
    }


}   
