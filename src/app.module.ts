import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { DataSource } from 'typeorm';
import { Cats2Controller } from './cats2/cats2.controller';
import { Cats3Service } from './cats3/cats3.service';
import { Cats3Controller } from './cats3/cats3.controller';
import { Cats3Module } from './cats3/cats3.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

/*
const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());
*/

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'idgD8hWqXq',
      password: 'IrRxBhFmi8',
      database: 'idgD8hWqXq',
      entities: [],
      synchronize: true,
    }),
    Cats3Module,
  ],
  controllers: [
    AppController,
    CatsController,
    Cats2Controller,
    Cats3Controller,
  ],
  providers: [
    AppService,
    Cats3Service /*{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }*/,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats3');
    //.forRoutes({ path: 'cats', method: RequestMethod.GET });
    //forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
    //.forRoutes(CatsController);
  }
  //constructor(private dataSource: DataSource) {}
}
