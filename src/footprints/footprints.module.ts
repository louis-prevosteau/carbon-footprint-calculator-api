import { Module } from '@nestjs/common';
import { FootprintsService } from './footprints.service';
import { FootprintsResolver } from './footprints.resolver';

@Module({
  providers: [FootprintsResolver, FootprintsService]
})
export class FootprintsModule {}
