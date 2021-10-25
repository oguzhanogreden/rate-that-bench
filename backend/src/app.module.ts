import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BenchesModule } from './benches/benches.module';
import { Bench } from './benches/entities/bench.entity';

@Module({
  imports: [
    BenchesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'postgres',
      entities: [Bench], // TODO: Consider using auto finder
      synchronize: true, // TODO: Remove when moving to prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
