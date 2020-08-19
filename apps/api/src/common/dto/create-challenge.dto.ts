import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class CreateChallengeDto {
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
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  outcome: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  proofUrl: string;
}
