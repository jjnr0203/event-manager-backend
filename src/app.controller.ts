import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseSeeder } from './database/seeders/database.seeder';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private databaseSeeder:DatabaseSeeder ) {}

  @Get('init')
  async init() {
    await this.databaseSeeder.run()
    return { message: 'Done' }
  }
}
