import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Param,
  Redirect,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  //@Get()
  //@Redirect('https://nestjs.com', 301)

  @Post()
  //@HttpCode(204)
  //@Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  /*
 @Get()
  async findAll(): Promise<any[]> {
    return [];
  }
  or
  @Get()
findAll(): Observable<any[]> {
  return of([]);
}
 */
  @Get('2')
  findAll2(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  @Get(':id')
  findOne(@Param('id') id: string /*@Param() params*/): string {
    //console.log(params.id);
    //return `This action returns a #${params.id} cat`;
    return `This action returns a #${id} cat`;
  }
}
