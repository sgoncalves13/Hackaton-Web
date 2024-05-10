import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PagoService } from './pagos.service';
import { PagoDto } from './pagos.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('pagos')
@ApiTags("Pagos")
export class PagoController {
    constructor(private readonly pagoService: PagoService) {}

  @Post()
  create(@Body() createPagoDto: PagoDto) {
    return this.pagoService.create(createPagoDto);
  }

  @Get('/all')
  findAll() {
    return this.pagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pagoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePagoDto: PagoDto) {
    return this.pagoService.update(id, updatePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pagoService.remove(id);
  }
}
