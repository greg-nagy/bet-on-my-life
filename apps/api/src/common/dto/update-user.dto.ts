import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  email: string;
  @IsOptional()
  @IsString()
  password: string;
  @IsOptional()
  @IsBoolean()
  isDeleted: boolean;
  @IsOptional()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsOptional()
  @IsString()
  pictureUrl: string;
}
