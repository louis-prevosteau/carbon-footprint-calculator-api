import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FootprintsService } from './footprints.service';
import { Footprint } from './entities/footprint.entity';
import { CreateFootprintInput } from './dto/create-footprint.input';
import { UpdateFootprintInput } from './dto/update-footprint.input';

@Resolver(() => Footprint)
export class FootprintsResolver {
  constructor(private readonly footprintsService: FootprintsService) {}

  @Mutation(() => Footprint)
  createFootprint(@Args('createFootprintInput') createFootprintInput: CreateFootprintInput) {
    return this.footprintsService.create(createFootprintInput);
  }

  @Query(() => [Footprint], { name: 'footprints' })
  findAll() {
    return this.footprintsService.findAll();
  }

  @Query(() => Footprint, { name: 'footprint' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.footprintsService.findOne(id);
  }

  @Mutation(() => Footprint)
  updateFootprint(@Args('updateFootprintInput') updateFootprintInput: UpdateFootprintInput) {
    return this.footprintsService.update(updateFootprintInput.id, updateFootprintInput);
  }

  @Mutation(() => Footprint)
  removeFootprint(@Args('id', { type: () => Int }) id: number) {
    return this.footprintsService.remove(id);
  }
}
