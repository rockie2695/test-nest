import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { DataSource } from 'typeorm';
import { Cats2Controller } from './cats2/cats2.controller';

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
  ],
  controllers: [AppController, CatsController, Cats2Controller],
  providers: [AppService],
})
export class AppModule {
  //constructor(private dataSource: DataSource) {}
}