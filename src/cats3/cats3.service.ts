import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat3.interface';

@Injectable()
export class Cats3Service {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
