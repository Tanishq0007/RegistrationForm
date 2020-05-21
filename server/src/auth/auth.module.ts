import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import  jwt  from '../config/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwt.secretKey,
      signOptions: { expiresIn: 3600 },
    }),
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
