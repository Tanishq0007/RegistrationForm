import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/customer.module';
import { RegisterModule } from './register/regsiter.module';
import { RegistrationModule } from './registration/registration.module'
import { WorkshopsModule } from './workshops/workshops.module'
import * as compression from 'compression';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.enableCors();
  app.use(helmet());
  app.use("/api/auth/", rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));

  app.use("/api/customers/", rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));

  const options = new DocumentBuilder()
    .setTitle('SAE-AKGEC Api')
    .setDescription('The SAE-AKGEC Api docs')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const catDocument = SwaggerModule.createDocument(app, options, {
    include: [AuthModule, UserModule, CustomerModule, BlogModule,
      ContactModule, RegisterModule, RegistrationModule, WorkshopsModule],
  });
  SwaggerModule.setup('api/docs', app, catDocument);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
