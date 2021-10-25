import { Injectable } from '@nestjs/common';
import { CreateBenchDto } from './dto/create-bench.dto';
import { UpdateBenchDto } from './dto/update-bench.dto';
import { Bench } from './entities/bench.entity';

@Injectable()
export class BenchesService {
  private readonly benches: Bench[] = [];

  create(createBenchDto: CreateBenchDto) {
    return 'This action adds a new bench';
  }

  findAll() {
    return `This action returns all benches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bench`;
  }

  update(id: number, updateBenchDto: UpdateBenchDto) {
    return `This action updates a #${id} bench`;
  }

  remove(id: number) {
    return `This action removes a #${id} bench`;
  }
}
