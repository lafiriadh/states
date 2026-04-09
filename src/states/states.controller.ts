// states.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Post()
  async create(@Body() body: { name: string; roleNumber: number }) {
    return this.statesService.create(body.name, body.roleNumber);
  }

  @Get()
  async findAll() {
    return this.statesService.findAll();
  }
}