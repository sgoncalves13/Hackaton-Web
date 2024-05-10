import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagosEntity } from './pagos.entity';
import { PagoController } from './pagos.controller';
import { PagoService } from './pagos.service';

@Module({
    imports: [TypeOrmModule.forFeature([PagosEntity])],
    controllers: [PagoController],
    providers: [PagoService]
  })
export class PagosModule {}
