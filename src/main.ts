import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  process.on('beforeExit', async () => {
    await app.close();
  });

  await app.listen(3000);
}
bootstrap();
