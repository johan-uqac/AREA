import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@area-guidone.mxen62d.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
