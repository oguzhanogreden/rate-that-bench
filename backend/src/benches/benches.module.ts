import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenchesController } from './benches.controller';
import { BenchesService } from './benches.service';
import { Bench } from './entities/bench.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bench])],
  controllers: [BenchesController],
  providers: [BenchesService],
})
export class BenchesModule {}
