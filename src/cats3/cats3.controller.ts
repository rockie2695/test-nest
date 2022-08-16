//https://docs.nestjs.com/providers
import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cats3Service } from './cats3.service';
import { Cat } from './interfaces/cat3.interface';
import { ForbiddenException } from 'src/forbidden.exception';
import { HttpExceptionFilter } from 'src/http-exception.filter';

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

  @Get('2')
  async findAll2() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  @Get('3')
  async findAll3() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get('4')
  async findAll4() {
    throw new ForbiddenException();
  }

  @Post('5')
  @UseFilters(new HttpExceptionFilter())
  async create5(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }
}
