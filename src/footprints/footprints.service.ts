import { Injectable } from '@nestjs/common';
import { CreateFootprintInput } from './dto/create-footprint.input';
import { Footprint } from './entities/footprint.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FootprintsService {
  constructor(
    @InjectRepository(Footprint)
    private readonly footprintRepository: Repository<Footprint>,
  ) {}

  create(createFootprintInput: CreateFootprintInput) {
    return 'This action adds a new footprint';
  }

  findAll() {
    return `This action returns all footprints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} footprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} footprint`;
  }
}
