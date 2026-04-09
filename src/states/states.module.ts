// states.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { States, StatesSchema } from '../../Schemas/states.schema';

@Module({
  imports: [
    // This makes the Model available for injection in this module
    MongooseModule.forFeature([{ name: States.name, schema: StatesSchema }]),
  ],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}