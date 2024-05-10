import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ViajeEntity } from './viajes.entity';
import { Repository } from 'typeorm';
import { ViajeDto } from './viajes.dto'
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Injectable()
export class ViajesService {

    constructor(
        @InjectRepository(ViajeEntity)
        private readonly viajesRepository: Repository<ViajeEntity>,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async create(ViajeDto: ViajeDto): Promise<ViajeEntity | string> {
        if ((await this.findUser(ViajeDto.conductorId)).type !== "Conductor"){
            return "El id del conductor no corresponde a un usuario que es conductor";
        }
        else if ((await this.findUser(ViajeDto.pasajeroId)).type !== "Pasajero"){
            return "El id del pasajero no corresponde a un usuario que es pasajero";
        }
        const newUser = this.viajesRepository.create(ViajeDto);
        return await this.viajesRepository.save(newUser);
      }
    
      async findAll(): Promise<ViajeEntity[]> {
        return await this.viajesRepository.find({relations: ["pasajero", "conductor"]});
      }
    
      async findOne(id: string): Promise<ViajeEntity | undefined> {
        return await this.viajesRepository.findOne({ where: { id: id }, relations: ["pasajero", "conductor"] });
      }

      async findUser(id: string): Promise<UsuarioEntity | undefined> {
        return await this.usuarioRepository.findOne({ where: { id: id } });
      }
    
      async update(id: string, updateUserDto: ViajeDto): Promise<ViajeEntity> {
        await this.viajesRepository.update(id, updateUserDto);
        return this.findOne(id);
      }
    
      async remove(id: string): Promise<String> {
        await this.viajesRepository.delete(id);
        return "Viaje " + id + " eliminado"
      }
}
