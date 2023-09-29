import { Module } from '@nestjs/common';
import { ValuesNameController } from './${{values.name}}.controller';
import { ValuesNameService } from './${{values.name}}.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
  ],
  controllers: [ValuesNameController],
  providers: [ValuesNameService],
})
export class ValuesNameModule {}
