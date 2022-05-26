import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany();
  }
  create(dto: CreateTableDto) {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }
}
