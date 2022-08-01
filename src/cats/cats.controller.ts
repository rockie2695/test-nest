import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  //@Get()
  //@Redirect('https://nestjs.com', 301)

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  /*@Get()
  findAll2(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }*/

  @Get(':id')
  findOne(@Param('id') id: string /*@Param() params*/): string {
    //console.log(params.id);
    //return `This action returns a #${params.id} cat`;
    return `This action returns a #${id} cat`;
  }
}
