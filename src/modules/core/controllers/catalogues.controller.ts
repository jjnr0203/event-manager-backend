import { Body, Controller, Post } from '@nestjs/common';
import { CreateCatalogueDto } from '../dto';
import { CataloguesService } from '../services/catalogues.service';

@Controller('catalogues')
export class CataloguesController {
    constructor(private readonly cataloguesService:CataloguesService){}
    @Post()
    async create(@Body() payload:CreateCatalogueDto){
        const catalogue = await this.cataloguesService.create(payload)
        return catalogue
    }
}
