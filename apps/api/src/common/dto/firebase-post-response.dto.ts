import { ApiProperty } from '@nestjs/swagger';

export class FirebasePostResponseDto {
  @ApiProperty()
  name: string;
}
