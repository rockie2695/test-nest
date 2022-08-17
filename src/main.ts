import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new HttpExceptionFilter());
  app.use(helmet());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
