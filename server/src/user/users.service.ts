import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/usesr.interface';
import {RegisterDto} from '../auth/dto/register.dto'

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    async findAll ():Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }
    async findUserById(userId):Promise<User> {
        const user =  await this.userModel.findById({'_id':userId}).exec();
        return user
    }
    async findUserByEmail(userEmail):Promise<User> {
        const user = await this.userModel.findOne({'email': userEmail}).exec();
        return user
    }

    async addUser(createUserDto:RegisterDto) {
        const newUser =  await this.userModel(createUserDto);
        return newUser.save()
    }
    async delete(userID): Promise<any> {
        const deletedUser = await this.userModel.findByIdAndRemove(userID);
        return deletedUser;
      }

    
    
}