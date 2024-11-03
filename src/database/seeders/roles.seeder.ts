import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from 'src/modules/auth/dto/role/create-role.dto';
import { RolesService } from 'src/modules/auth/services';

@Injectable()
export class RolesSeeder {
  constructor(private rolesService: RolesService) {}

  async run() {
    await this.createRoles();
  }

  private async createRoles() {
    const roles: CreateRoleDto[] = [
      {
        code: 1,
        name: 'PARTICIPANT',
      },
      {
        code: 2,
        name: 'ORGANIZER',
      },
      {
        code: 3,
        name: 'ADMIN',
      },
    ];
    for (const role of roles) {
      await this.rolesService.create(role);
    }
  }
}
