import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './interfaces/product.interface'
import { CreateProductDTO } from './dto/product.dto'

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly  productModel: Model<Product>){}

    async getProducts(): Promise<Product[]>{ //[]: porque va a devolver un arreglo
        const products = await this.productModel.find(); //productModel: es la conexion de mongooose
        return products
    }

    async getProduct(productID: string): Promise<Product>{
        const product = await this.productModel.findById(productID)
        return product
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product>{
        const product  =  new  this.productModel(createProductDTO);
        return await product.save()
    }

    async deleteProduct(productID: string): Promise<Product>{
        return await this.productModel.findByIdAndDelete(productID)
    }

    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product>{
        return await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new:true});
    }
}
