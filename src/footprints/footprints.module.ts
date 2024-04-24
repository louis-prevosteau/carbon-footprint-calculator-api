import { Module } from '@nestjs/common';
import { FootprintsService } from './footprints.service';
import { FootprintsResolver } from './footprints.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footprint } from './entities/footprint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Footprint])],
  providers: [FootprintsResolver, FootprintsService],
})
export class FootprintsModule {}
