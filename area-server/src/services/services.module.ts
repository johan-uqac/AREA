import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { AreaMailerService } from 'src/area-mailer/area-mailer.service';
import { AreaMailerModule } from 'src/area-mailer/area-mailer.module';
import { MeteoServiceModule } from 'src/meteo-service/meteo-service.module';
import { MeteoServiceService } from 'src/meteo-service/meteo-service.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [AreaMailerModule, MeteoServiceModule, UserModule],
  providers: [
    ServicesService,
    AreaMailerService,
    MeteoServiceService,
    UserService,
  ],
})
export class ServicesModule {}
