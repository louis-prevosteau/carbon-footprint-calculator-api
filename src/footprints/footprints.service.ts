import { Injectable } from '@nestjs/common';
import { CreateFootprintInput } from './dto/create-footprint.input';
import { UpdateFootprintInput } from './dto/update-footprint.input';

@Injectable()
export class FootprintsService {
  create(createFootprintInput: CreateFootprintInput) {
    return 'This action adds a new footprint';
  }

  findAll() {
    return `This action returns all footprints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} footprint`;
  }

  update(id: number, updateFootprintInput: UpdateFootprintInput) {
    return `This action updates a #${id} footprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} footprint`;
  }
}
