//https://docs.nestjs.com/modules
import { Module } from '@nestjs/common';
import { Cats3Controller } from './cats3.controller';
import { Cats3Service } from './cats3.service';

@Module({
  controllers: [Cats3Controller],
  providers: [Cats3Service],
  exports: [Cats3Service],
})
export class Cats3Module {}
