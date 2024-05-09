import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ViajeEntity } from './viajes.entity';
import { Repository } from 'typeorm';
import { ViajeDto } from './viajes.dto'

@Injectable()
export class ViajesService {

    constructor(
        @InjectRepository(ViajeEntity)
        private readonly viajesRepository: Repository<ViajeEntity>
    ){}

    async create(ViajeDto: ViajeDto): Promise<ViajeEntity> {
        const newUser = this.viajesRepository.create(ViajeDto);
        return await this.viajesRepository.save(newUser);
      }
    
      async findAll(): Promise<ViajeEntity[]> {
        return await this.viajesRepository.find();
      }
    
      async findOne(id: string): Promise<ViajeEntity | undefined> {
        return await this.viajesRepository.findOne({ where: { id: id } });
      }
    
      async update(id: string, updateUserDto: ViajeDto): Promise<ViajeEntity> {
        await this.viajesRepository.update(id, updateUserDto);
        return this.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.viajesRepository.delete(id);
      }
}
