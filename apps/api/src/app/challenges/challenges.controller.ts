import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FirebasePostResponseDto } from '../../common/dto/firebase-post-response.dto';
import { ChallengeService } from '../../data/challenge/challenge.service';
import { ChallengeDto } from '../../common/dto/challenge.dto';
import { UpdateChallengeDto } from '../../common/dto/update-challenge.dto';
import { CreateChallengeDto } from '../../common/dto/create-challenge.dto';

@ApiTags('challenges')
@Controller('challenges')
@UseInterceptors(ClassSerializerInterceptor)
export class ChallengesController {
  constructor(private readonly challengeSvc: ChallengeService) {}

  @Get('/')
  @ApiResponse({
    status: 200,
    type: ChallengeDto,
  })
  @ApiResponse({
    status: 200,
    type: null,
  })
  getAll() {
    return this.challengeSvc.getAll();
  }

  @Get('/:challengeId')
  @ApiResponse({
    status: 200,
    type: ChallengeDto,
  })
  @ApiResponse({
    status: 200,
    type: null,
  })
  getById(@Param('challengeId') challengeId: string) {
    return this.challengeSvc.getById(challengeId);
  }

  @Get('/:challengeId/author')
  getAuthor(@Param('challengeId') challengeId: string) {
    return this.challengeSvc.getAuthor(challengeId);
  }

  @Get('/:challengeId/bets')
  getBets(@Param('challengeId') challengeId: string) {
    return this.challengeSvc.getBets(challengeId);
  }

  @Post('/')
  @ApiResponse({
    status: 200,
    type: FirebasePostResponseDto,
  })
  create(@Body() data: CreateChallengeDto) {
    return this.challengeSvc.create(data);
  }

  @Patch('/:challengeId')
  @ApiResponse({
    status: 200,
    type: UpdateChallengeDto,
  })
  update(
    @Param('challengeId') challengeId: string,
    @Body() data: UpdateChallengeDto
  ) {
    return this.challengeSvc.update(challengeId, data);
  }

  @Delete('/:challengeId')
  @ApiResponse({
    status: 200,
    type: null,
  })
  delete(@Param('challengeId') challengeId: string) {
    return this.challengeSvc.delete(challengeId);
  }
}
