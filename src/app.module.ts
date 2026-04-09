import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StatesModule } from './states/states.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'states'}), StatesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
