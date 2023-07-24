import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";//importamos el modulo de mongoose

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://Sebastian:dP9jDmClZ8mlPsaX@cluster0.bbjm3do.mongodb.net/Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
