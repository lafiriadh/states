import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema} from '../Schemas/states.schema';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'states'}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
