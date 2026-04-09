// states.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { States } from '../../Schemas/states.schema';

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(States.name) private stateModel: Model<States>
  ) {}

  // Function to save a new state
  async create(name: string, roleNumber: number): Promise<States> {
    const newState = new this.stateModel({ name, roleNumber });
    return newState.save();
  }

  // Function to get all states
  async findAll(): Promise<States[]> {
    return this.stateModel.find().exec();
  }
}