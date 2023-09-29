import { Controller, Get } from '@nestjs/common';
import { ValuesName } from './${{values.name}}';
import { ValuesNameService } from './${{values.name}}.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('/user')
export class ValuesNameController {
  constructor(private readonly appService: ValuesNameService) {}

  @Get()
  @ApiOperation({ summary: 'Create user' })
  @ApiOkResponse({
    description: 'The user records',
    type: ValuesName,
  })
  getUser(): ValuesName {
    return this.appService.getUser();
  }
}
