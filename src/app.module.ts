import { TableModule } from './table/table.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
