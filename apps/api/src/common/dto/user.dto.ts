import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsBoolean()
  isDeleted: boolean;

  @ApiProperty()
  @IsString()
  email: string;

  @IsString()
  @Exclude({ toPlainOnly: true })
  password: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lastName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pictureUrl: string;
}
