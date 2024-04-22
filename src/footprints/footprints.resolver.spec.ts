import { Test, TestingModule } from '@nestjs/testing';
import { FootprintsResolver } from './footprints.resolver';
import { FootprintsService } from './footprints.service';

describe('FootprintsResolver', () => {
  let resolver: FootprintsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootprintsResolver, FootprintsService],
    }).compile();

    resolver = module.get<FootprintsResolver>(FootprintsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
