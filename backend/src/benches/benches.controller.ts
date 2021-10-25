import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchesService } from './benches.service';
import { CreateBenchDto } from './dto/create-bench.dto';
import { UpdateBenchDto } from './dto/update-bench.dto';

@Controller('benches')
export class BenchesController {
  constructor(private readonly benchesService: BenchesService) {}

  @Post()
  create(@Body() createBenchDto: CreateBenchDto) {
    return this.benchesService.create(createBenchDto);
  }

  @Get()
  findAll() {
    return this.benchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchDto: UpdateBenchDto) {
    return this.benchesService.update(+id, updateBenchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchesService.remove(+id);
  }
}
