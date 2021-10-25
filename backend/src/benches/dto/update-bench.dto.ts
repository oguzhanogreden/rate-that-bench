import { PartialType } from '@nestjs/mapped-types';
import { CreateBenchDto } from './create-bench.dto';

export class UpdateBenchDto extends PartialType(CreateBenchDto) {}
