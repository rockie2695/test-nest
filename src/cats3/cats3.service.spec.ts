import { Test, TestingModule } from '@nestjs/testing';
import { Cats3Service } from './cats3.service';

describe('Cats3Service', () => {
  let service: Cats3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cats3Service],
    }).compile();

    service = module.get<Cats3Service>(Cats3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
