import { Module ,MiddlewareConsumer ,NestModule ,RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendMiddleware } from './middleware/frontend.middleware';
import { MongooseModule } from '@nestjs/mongoose';
//Modules
import {WorkshopModule} from './workshops/workshop.module'
import { UserModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [WorkshopModule , MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://localhost/nest'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FrontendMiddleware).forRoutes(
      {
        path: '/**', // For all routes
        method: RequestMethod.ALL, // For all methods
      },
    );
  }
}
