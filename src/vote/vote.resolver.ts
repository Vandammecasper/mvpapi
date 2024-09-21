import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VoteService } from './vote.service';
import { Vote } from './entities/vote.entity';
import { CreateVoteInput } from './dto/create-vote.input';
import { CreatePersonalVoteInput } from './dto/create-personal-vote.input';
import { UseGuards } from '@nestjs/common';
import { FirebaseGuard } from '../authentication/guards/firebase.guard';

@Resolver(() => Vote)
export class VoteResolver {
  constructor(private readonly voteService: VoteService) {}

  @UseGuards(FirebaseGuard)
  @Mutation(() => Vote, { description: 'Create a new vote' })
  createVote(@Args('createVoteInput') createVoteInput: CreateVoteInput): Promise<Vote> {
    return this.voteService.create(createVoteInput);
  }

  @Mutation(() => Vote, { description: 'Add personal vote to vote' })
  addPersonalVote(@Args('createPersonalVoteInput') personalVoteInput: CreatePersonalVoteInput): Promise<Vote> {
    return this.voteService.addPersonalVote(personalVoteInput);
  }

  @UseGuards(FirebaseGuard)
  @Mutation(() => Vote, { description: 'Add amount of teammates' })
  addTeammates(@Args('voteId', { type: () => String }) voteId: string, @Args('teammates', { type: () => Int }) teammates: number): Promise<Vote> {
    return this.voteService.addTeammates(voteId, teammates);
  }

  @UseGuards(FirebaseGuard)
  @Mutation(() => Vote, { description: 'Close vote' })
  closeVote(@Args('voteId', { type: () => String }) voteId: string): Promise<Vote> {
    return this.voteService.closeVote(voteId);
  }

  @Query(() => [Vote], { name: 'votes' })
  findAll() {
    return this.voteService.findAll();
  }

  @UseGuards(FirebaseGuard)
  @Query(() => [Vote], { name: 'votesByCreatorUid' })
  votesByCreatorUid(@Args('uid', { type: () => String }) uid: string) {
    return this.voteService.findByCreatorUid(uid);
  }

  @UseGuards(FirebaseGuard)
  @Query(() => Vote, { name: 'voteByVoteId' })
  findByVoteId(@Args('voteId', { type: () => String }) voteId: string) {
    return this.voteService.findByVoteId(voteId);
  }

  @UseGuards(FirebaseGuard)
  @Mutation(() => Vote)
  removeVote(@Args('id', { type: () => Int }) id: number) {
    return this.voteService.remove(id);
  }
}
