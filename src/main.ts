import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //puerto al que escucha el servidor al correr
  await app.listen(3000);
}
bootstrap();
