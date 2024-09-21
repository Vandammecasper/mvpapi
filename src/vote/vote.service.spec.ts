import { Test, TestingModule } from '@nestjs/testing';
import { VoteService } from './vote.service';

// Mock for VoteRepository (adjust based on your actual repository interface)
const mockVoteRepository = {
  // mock methods as needed
  findAll: jest.fn(),
  save: jest.fn(),
};

describe('VoteService', () => {
  let service: VoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VoteService,
        { provide: 'VoteRepository', useValue: mockVoteRepository }, // Mock the repository
      ],
    }).compile();

    service = module.get<VoteService>(VoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

