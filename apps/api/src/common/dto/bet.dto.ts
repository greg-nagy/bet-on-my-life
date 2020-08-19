import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BetDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsBoolean()
  isDeleted: boolean;

  @ApiProperty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsString()
  challenge: string;

  @ApiProperty()
  @IsBoolean()
  inFavor: boolean;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  result: number;
}
