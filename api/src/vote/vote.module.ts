import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteResolver } from './vote.resolver';
import { Vote } from './entities/vote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  providers: [VoteResolver, VoteService],
  exports: [VoteService],
})
export class VoteModule {}
