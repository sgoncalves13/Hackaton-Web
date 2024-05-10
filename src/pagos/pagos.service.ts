import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagosEntity } from './pagos.entity';
import { Repository } from 'typeorm';
import { PagoDto } from './pagos.dto'

@Injectable()
export class PagoService {

    constructor(
        @InjectRepository(PagosEntity)
        private readonly pagosRepository: Repository<PagosEntity>
    ){}

    async create(PagoDto: PagoDto): Promise<PagosEntity | string> {
        const newUser = this.pagosRepository.create(PagoDto);
        return await this.pagosRepository.save(newUser);
      }
    
      async findAll(): Promise<PagosEntity[]> {
        return await this.pagosRepository.find({relations: ["usuario", "viaje"]});
      }
    
      async findOne(id: number): Promise<PagosEntity | undefined> {
        return await this.pagosRepository.findOne({ where: { id: id }, relations: ["usuario", "viaje"] });
      }
    
      async update(id: number, updatePagoDto: PagoDto): Promise<PagosEntity> {
        await this.pagosRepository.update(id, updatePagoDto);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<string> {
        await this.pagosRepository.delete(id);
        return "Pago " + String(id) + " eliminado" 
      }
}
