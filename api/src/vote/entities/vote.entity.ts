import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class PersonalVote {
  @Field(() => String, { description: 'Name of the MVP of the match', nullable: false })
  mvp: string;

  @Field(() => String, { description: 'Comment to explain the MVP vote', nullable: true })
  mvpComment: string;

  @Field(() => String, { description: 'Name of the loser of the match', nullable: true })
  loser: string;

  @Field(() => String, { description: 'Comment to explain the loser vote', nullable: true })
  loserComment: string;
}

@Entity()
@ObjectType()
export class Vote {
  @ObjectIdColumn()
  @Field(() => ID, {description: 'The id of the vote', nullable: false})
  id: string;

  @Column()
  @Field(() => String, {description: 'Id of the vote created by the front-end', nullable: false})
  voteId: string;

  @Column()
  @Field(() => String, {description: 'Uid of the creator', nullable: false})
  creatorUid: string;

  @Column()
  @Field(() => Date, {description: 'Date of the vote', nullable: false})
  date: Date;

  @Column()
  @Field(() => Boolean, {description: 'Whether loser vote is switched on', nullable: false})
  loser: boolean;

  @Column()
  @Field(() => Boolean, {description: 'Whether comments are switched on', nullable: false})
  comments: boolean;

  @Column("jsonb", {array: true, default: []})
  @Field(() => [PersonalVote], {description: 'The history of lock changes', nullable: false})
  personalVotes: PersonalVote[];

  @Column()
  @Field(() => Boolean, {description: 'whether the vote is closed or not', nullable: false})
  voteClosed: boolean;

  @Column()
  @Field(() => Int, {description: 'How many teammates are participating', nullable: false})
  teammates: number;
}
