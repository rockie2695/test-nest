import { Test, TestingModule } from '@nestjs/testing';
import { Cats3Controller } from './cats3.controller';

describe('Cats3Controller', () => {
  let controller: Cats3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Cats3Controller],
    }).compile();

    controller = module.get<Cats3Controller>(Cats3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
