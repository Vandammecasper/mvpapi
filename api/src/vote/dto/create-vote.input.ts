import { InputType, Int, Field } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { CreatePersonalVoteInput } from './create-personal-vote.input';
import { Unique } from 'typeorm';

@InputType()
export class CreateVoteInput {
  @Unique(['voteId'])
  @IsString()
  @Field(() => String, { description: 'Id of the vote created by the front-end' })
  voteId: string;

  @IsString()
  @Field(() => String, { description: 'Uid of the creator' })
  creatorUid: string;

  @IsBoolean()
  @Field(() => Boolean, { description: 'Whether loser vote is switched on' })
  loser: boolean;

  @IsBoolean()
  @Field(() => Boolean, { description: 'Whether comments are switched on' })
  comments: boolean;
}
