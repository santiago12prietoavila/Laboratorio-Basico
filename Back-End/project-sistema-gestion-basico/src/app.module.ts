import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresModule } from './module/proveedores/proveedores.module';
import { ClientesModule } from './module/clientes/clientes.module';
import { ProductosModule } from './module/productos/productos.module';
import { AuthModule } from './module/auth/auth.module';
import { BookModule } from './module/book/book.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Esto hace que las variables sean accesibles globalmente en tu aplicación
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 5000,
        limit: 1,
      },
    ]),
    MongooseModule.forRoot('mongodb://localhost:27017/Bacnk-end-proyecto-basico'),
    ProveedoresModule,
    ClientesModule,
    ProductosModule,
    AuthModule,
    BookModule,
  ],
})
export class AppModule { }
