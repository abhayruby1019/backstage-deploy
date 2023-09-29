import { ApiProperty } from '@nestjs/swagger';

export class ValuesName {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
