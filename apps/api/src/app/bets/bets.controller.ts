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
import { BetService } from '../../data/bet/bet.service';
import { BetDto } from '../../common/dto/bet.dto';
import { CreateBetDto } from '../../common/dto/create-bet.dto';
import { UpdateBetDto } from '../../common/dto/update-bet.dto';

@ApiTags('bets')
@Controller('bets')
@UseInterceptors(ClassSerializerInterceptor)
export class BetsController {
  constructor(private readonly betSvc: BetService) {}

  @Get('/')
  @ApiResponse({
    status: 200,
    type: BetDto,
  })
  @ApiResponse({
    status: 200,
    type: null,
  })
  getAll() {
    return this.betSvc.getAll();
  }

  @Get('/:betId')
  @ApiResponse({
    status: 200,
    type: BetDto,
  })
  @ApiResponse({
    status: 200,
    type: null,
  })
  getById(@Param('betId') betId: string) {
    return this.betSvc.getById(betId);
  }

  @Get('/:betId/author')
  getAuthor(@Param('betId') betId: string) {
    return this.betSvc.getAuthor(betId);
  }

  @Get('/:betId/challenge')
  getBets(@Param('betId') betId: string) {
    return this.betSvc.getChallenge(betId);
  }

  @Post('/')
  @ApiResponse({
    status: 200,
    type: FirebasePostResponseDto,
  })
  create(@Body() data: CreateBetDto) {
    return this.betSvc.create(data);
  }

  @Patch('/:betId')
  @ApiResponse({
    status: 200,
    type: UpdateBetDto,
  })
  update(@Param('betId') betId: string, @Body() data: UpdateBetDto) {
    return this.betSvc.update(betId, data);
  }

  @Delete('/:betId')
  @ApiResponse({
    status: 200,
    type: null,
  })
  delete(@Param('betId') betId: string) {
    return this.betSvc.delete(betId);
  }
}
