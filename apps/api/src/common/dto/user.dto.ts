import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserDto {
  @IsString()
  id: string;
  @IsString()
  email: string;
  @IsString()
  @Exclude({ toPlainOnly: true })
  password: string;
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
