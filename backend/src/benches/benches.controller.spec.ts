import { Test, TestingModule } from '@nestjs/testing';
import { BenchesController } from './benches.controller';
import { BenchesService } from './benches.service';

describe('BenchesController', () => {
  let controller: BenchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenchesController],
      providers: [BenchesService],
    }).compile();

    controller = module.get<BenchesController>(BenchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
