import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {

    @Post('upload')
    @UseInterceptors(FilesInterceptor('file'))
    uploadFial(@UploadedFile()file: Express.Multer.File){
        console.log(file)
    }
}
