import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";//importamos el modulo de mongoose
import { ImagesModule } from './images/images.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://Sebastian:dP9jDmClZ8mlPsaX@cluster0.bbjm3do.mongodb.net/Cluster0'), ImagesModule],//import es para agregar funcionalidades extras, como agregar una concexion de BD
  controllers: [AppController],//aca importamos el arcivo que contiene todos los metods CRUD
  providers: [AppService],//aca las funciones que puedes comuniucarse con la BD y que pueden ser reutilizados. Clases
})
export class AppModule {}
