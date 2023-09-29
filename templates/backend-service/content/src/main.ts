import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValuesNameModule } from './${{values.name}}/${{values.name}}.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(ValuesNameModule, { bufferLogs: true });
  // Automatically logs all the HTTP requests coming into your NestJS app
  app.useLogger(app.get(Logger));

  const config = new DocumentBuilder()
    .setTitle('PFL Customer Service')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('pfl')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
