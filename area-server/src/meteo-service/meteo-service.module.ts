import { Module } from '@nestjs/common';
import { MeteoServiceService } from './meteo-service.service';

@Module({
  providers: [MeteoServiceService],
})
export class MeteoServiceModule {}
