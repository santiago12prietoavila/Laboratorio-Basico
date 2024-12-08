import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import { CreateDtoBook } from './dto/create-book.dto';
import { User } from 'src/module/auth/schema/auth.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

    // Método para traer todos los libros
    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find().exec();
        return books;
    }

    // Método para crear un libro
    async createBook(createDtoBook: CreateDtoBook, user: User): Promise<Book> {
        const data = Object.assign(createDtoBook, { user: user._id });
        const book = await this.bookModel.create(data);
        return book;
    }

    // Método para traer un libro
    async findByIdBook(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
        return book;
    }
}