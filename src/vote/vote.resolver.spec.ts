import { Test, TestingModule } from '@nestjs/testing';
import { VoteResolver } from './vote.resolver';
import { VoteService } from './vote.service';

// Mock for VoteRepository
const mockVoteRepository = {
  // mock the repository methods as needed
  findAll: jest.fn(),
  save: jest.fn(),
};

describe('VoteResolver', () => {
  let resolver: VoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VoteResolver,
        VoteService,
        { provide: 'VoteRepository', useValue: mockVoteRepository }, // Provide the mock
      ],
    }).compile();

    resolver = module.get<VoteResolver>(VoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
