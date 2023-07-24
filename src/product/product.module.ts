import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import{ MongooseModule } from '@nestjs/mongoose' 
import { ProductSchema } from './schemas/product.schema' //esquema creado

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Product', schema: ProductSchema}//se define que se va a guardar
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
