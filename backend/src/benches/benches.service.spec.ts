import { Test, TestingModule } from '@nestjs/testing';
import { BenchesService } from './benches.service';

describe('BenchesService', () => {
  let service: BenchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchesService],
    }).compile();

    service = module.get<BenchesService>(BenchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
