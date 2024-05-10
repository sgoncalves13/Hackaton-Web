import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ViajesService } from '../viajes/viajes.service';
import { ViajeDto } from '../viajes/viajes.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('viaje')
@ApiTags("Viajes")
export class ViajeController {
    constructor(private readonly viajesService: ViajesService) {}

  @Post()
  create(@Body() createViajeDto: ViajeDto) {
    return this.viajesService.create(createViajeDto);
  }

  @Get('/all')
  findAll() {
    return this.viajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viajesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: ViajeDto) {
    return this.viajesService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viajesService.remove(id);
  }
}
