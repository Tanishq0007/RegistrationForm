import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/users.schema';
import {UsersService} from './users.service'
@Module({
  imports:[MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),],
  exports:[UsersService],
  providers:[UsersService],
  controllers: [UserController]
})
export class UserModule {}
