import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BenchesModule } from './benches/benches.module';

@Module({
  imports: [
    BenchesModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: '',
    //   password: '',
    //   database: 'ratethatbench',
    //   entities: [],
    //   synchronize: true, // Remove when moving to prod
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
