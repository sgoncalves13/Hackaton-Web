import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDto } from '../usuario/usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags("Usuarios")
export class UsuarioController {
    constructor(private readonly usuariosService: UsuarioService) {}

  @Post()
  create(@Body() createUserDto: UsuarioDto) {
    return this.usuariosService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UsuarioDto) {
    return this.usuariosService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }
}
