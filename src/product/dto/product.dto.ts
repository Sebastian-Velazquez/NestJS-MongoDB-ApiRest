// se ecpota en product.controller
export class CreateProductDTO{//Al tener TypeScript inconrporado en nestjs se puede validar los json al ser de tipado estatico
    readonly name: string;//readonly: es como esta en la documentacion
    readonly descriprion: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}