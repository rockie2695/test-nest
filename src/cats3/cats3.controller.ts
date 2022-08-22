//https://docs.nestjs.com/providers
//https://docs.nestjs.com/exception-filters
//https://docs.nestjs.com/pipes
import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cats3Service } from './cats3.service';
import { Cat } from './interfaces/cat3.interface';
import { ForbiddenException } from 'src/forbidden.exception';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorators';
import { LoggingInterceptor } from 'src/logging.interceptor';

@Controller('cats3')
@UseGuards(RolesGuard /*new RolesGuard */)
@UseInterceptors(LoggingInterceptor /*new LoggingInterceptor */)
export class Cats3Controller {
  constructor(private catsService: Cats3Service) {}

  @Post()
  //@SetMetadata('roles', ['admin'])
  @Roles('admin')
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

  @Get('6')
  //localhost:3000/cats3/6?id=1
  async findOne6(@Query('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
  /*
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
*/
  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
