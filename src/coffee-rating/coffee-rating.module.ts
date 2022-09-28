import { Module } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CoffeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeesService],
  providers: [CoffeRatingService],
})
export class CoffeRatingModule {}
