import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";


@InputType()
export class CreatePersonalVoteInput {
    @IsString()
    @Field(() => String, { description: 'id of the vote created in the front-end', nullable: false })
    voteId: string;

    @IsString()
    @Field(() => String, { description: 'Name of the MVP of the match', nullable: false })
    mvp: string;

    @IsString()
    @Field(() => String, { description: 'Comment to explain the MVP vote', nullable: true })
    mvpComment: string;

    @IsString()
    @Field(() => String, { description: 'Name of the loser of the match', nullable: true })
    loser: string;

    @IsString()
    @Field(() => String, { description: 'Comment to explain the loser vote', nullable: true })
    loserComment: string;
}