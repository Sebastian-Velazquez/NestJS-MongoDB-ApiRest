import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateProductDTO } from "./dto/product.dto";

@Controller('product')
export class ProductController {

    @Post('/create') //se crean las rutas
    createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){//DTO: hace rreferencia de que se se esta transfiriendo del clinete al servidor. Es de buena practica ponle DTO
        //aca va el contenido del lo que serria un controlador en express
        //console.log(createProductDTO);
        res.status(HttpStatus.OK).json({//es para indicarle que todo esta bien
            message: 'received'
        });
    }
}
