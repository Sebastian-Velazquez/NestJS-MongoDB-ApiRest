import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const puerto =  3000
  await  app.listen(puerto);
  console.log(`corriendo en el puerto ${puerto}`)
}
bootstrap();
