import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioDto } from './usuario.dto'

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuariosRepository: Repository<UsuarioEntity>
    ){}

    async create(UsuarioDto: UsuarioDto): Promise<UsuarioEntity> {
        const newUser = this.usuariosRepository.create(UsuarioDto);
        return await this.usuariosRepository.save(newUser);
      }
    
      async findAll(): Promise<UsuarioEntity[]> {
        return await this.usuariosRepository.find();
      }
    
      async findOne(id: string): Promise<UsuarioEntity | undefined> {
        return await this.usuariosRepository.findOne({ where: { id: id } });
      }
    
      async update(id: string, updateUserDto: UsuarioDto): Promise<UsuarioEntity> {
        await this.usuariosRepository.update(id, updateUserDto);
        return this.findOne(id);
      }
    
      async remove(id: string): Promise<String> {
        await this.usuariosRepository.delete(id);
        return "Usuario " + id + " eliminado"
      }
}
