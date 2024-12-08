
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Req,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateDtoBook } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/decorators/role.decorator';
import { ERole } from '../auth/enum/role.enum';
import { RolesGuard } from '../auth/guards/role.guards';
import { User } from '../auth/schema/auth.schema';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SkipThrottle } from '@nestjs/throttler';


@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Get()
    @SkipThrottle()
    @Roles(ERole.MODERATOR, ERole.ADMIN, ERole.USER)
    @UseGuards(AuthGuard(), RolesGuard)
    async findAllBooks(): Promise<Book[]> {
        return await this.bookService.findAll();
    }

    @Post()
    @UseGuards(AuthGuard())
    async createBook(@Body() book: CreateDtoBook, @Req() req): Promise<Book> {
        return await this.bookService.createBook(book, req.user);
    }

    @Get(':id')
    async findByIdBook(@Param('id') id: string): Promise<Book> {
        return await this.bookService.findByIdBook(id);
    }

    @Put('upload/:id')
    @UseGuards(AuthGuard())
    @UseInterceptors(FilesInterceptor('files'))
    async uploadImages(
        @Param('id') id: string,
        @UploadedFiles() file: Array<Express.Multer.File>,
    ) {
        console.log(id);
        console.log(file);
        return;
    }
}