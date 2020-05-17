import { Controller, Get , Res } from '@nestjs/common';
import { AppService } from './app.service';
import path = require('path')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  root(@Res() response): void {
    // the homepage will load our index.html which contains angular logic
    response.sendFile(path.resolve('../dist/client/index.html'));
  }

}
