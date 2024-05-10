import { Module } from '@nestjs/common';
import { ViajeController } from './viajes.controller';
import { ViajesService } from './viajes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajeEntity } from './viajes.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ViajeEntity, UsuarioEntity])],
  controllers: [ViajeController],
  providers: [ViajesService]
})
export class ViajesModule {}