import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity';
import { ViajeEntity } from './viajes/viajes.entity';
import { PagosEntity } from './pagos/pagos.entity';
import { ViajesModule } from './viajes/viajes.module';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports:[ 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'Uber',
    entities: [UsuarioEntity, ViajeEntity, PagosEntity],
    synchronize: true,
  }),
  UsuarioModule, ViajesModule, PagosModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

