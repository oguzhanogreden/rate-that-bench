import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBenchDto } from './dto/create-bench.dto';
import { UpdateBenchDto } from './dto/update-bench.dto';
import { Bench } from './entities/bench.entity';

@Injectable()
export class BenchesService {
  private readonly benches: Bench[] = [];

  constructor(
    @InjectRepository(Bench)
    private benchesRepository: Repository<Bench>,
  ) {}

  create(createBenchDto: CreateBenchDto) {
    function mapper(dto: CreateBenchDto): Bench {
      return {
        location: dto.location,
      };
    }

    this.benchesRepository.save(mapper(createBenchDto));
  }

  findAll() {
    return this.benchesRepository.find();
  }

  findOne(id: string) {
    return this.benchesRepository.findOne(id);
  }

  update(id: number, updateBenchDto: UpdateBenchDto) {
    return `This action updates a #${id} bench`;
  }

  remove(id: number) {
    return `This action removes a #${id} bench`;
  }
}
