//https://docs.nestjs.com/providers
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cats3Service } from './cats3.service';
import { Cat } from '../interfaces/cat3.interface';

@Controller('cats3')
export class Cats3Controller {
  constructor(private catsService: Cats3Service) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
