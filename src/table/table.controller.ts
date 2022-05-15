import { Controller, Get } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  findAll() {
    return 'buscar todas as mesas';
  }
}
