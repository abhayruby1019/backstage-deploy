import { Logger, Injectable } from '@nestjs/common';
import { ValuesName } from './${{values.name}}';

@Injectable()
export class ValuesNameService {
  private readonly logger = new Logger(ValuesNameService.name);

  getUser(): ValuesName {
    this.logger.log(`Logging User`);
    const user = { email: 'abc@gmail.com', password: 'abc' };
    return user;
  }
}
