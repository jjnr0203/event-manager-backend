import { Injectable } from '@nestjs/common';
import { CataloguesService } from 'src/modules/core/services';
import { seedData } from './data';
import { RolesService } from 'src/modules/auth/services';

@Injectable()
export class DatabaseSeeder {
  constructor(
    private readonly cataloguesService: CataloguesService,
    private readonly rolesService: RolesService,
  ) {}

  async run() {
    const categories = await this.cataloguesService.insertMany(
      seedData.eventCategories,
    );
    const roles = await this.rolesService.insertMany(seedData.roles);
    return { categories, roles };
  }
}
