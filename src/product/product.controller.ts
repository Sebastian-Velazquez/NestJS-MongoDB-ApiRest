//nest generate controller product
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';//Query para pasar una consulta por la url

import { CreateProductDTO } from "./dto/product.dto";

import { ProductService} from './product.service'
import { prototype } from 'events';
import { create } from 'domain';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create') //se crean las rutas
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){//DTO: hace rreferencia de que se se esta transfiriendo del clinete al servidor. Es de buena practica ponle DTO
        //aca va el contenido del lo que serria un controlador en express
        //console.log(createProductDTO);
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({//es para indicarle que todo esta bien
            message: 'Product Seccessfully Created',
            product
        });
    }

    @Get('/')
    async getProducts(@Res()res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products 
        })
    }

    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id){
        const product = await this.productService.getProduct(id);
        if(!product) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json(product)
    }

    @Delete('/delete')//se va a hacer por medio de una consulta en vez de un parm
    async deleteProduct(@Res() res, @Query('id') id){//http://localhost:3000/product/delete?id=64bee9781455fcdc1a1c1216
        const productDelete = await this.productService.deleteProduct(id);
        if(!productDelete) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Product Delete Succesfully',
            productDelete
        })
    }

    @Put('/update')//http://localhost:3000/product/update?id=64bfd09240fc1b39c1060e64
    async updateProduct(@Res()res, @Body() createProductDTO: CreateProductDTO, @Query('id') id){
        const updateProduct = await this.productService.updateProduct(id, createProductDTO);
        if(!updateProduct) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfuly',
            updateProduct
        })
    }
}
