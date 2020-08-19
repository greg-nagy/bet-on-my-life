import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class CreateBetDto {
  @Exclude()
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
