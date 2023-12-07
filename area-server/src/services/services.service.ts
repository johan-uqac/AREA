import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AreaMailerService } from 'src/area-mailer/area-mailer.service';
import { MeteoServiceService } from 'src/meteo-service/meteo-service.service';
import { IssService } from '../iss/iss.service';

@Injectable()
export class ServicesService implements OnModuleInit {
  private readonly logger = new Logger(ServicesService.name);
  constructor(
    private readonly mailer: AreaMailerService,
    private readonly meteo: MeteoServiceService,
    private readonly issService: IssService,
  ) {}

  async onModuleInit(): Promise<void> {
    console.log('module inited');
  }

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }

  @Cron('0 0 * * *')
  async sendSnowAlert() {
    const snowDay = await this.meteo.getSnowDay();
    this.mailer.sendSnowMail('neiger', snowDay);
    this.logger.debug('mail for snow send');
  }

  @Cron('0 0 * * *')
  async sendRainAlert() {
    const rainDay = await this.meteo.getRainDay();
    this.mailer.sendRainMail('pleuvoir', rainDay);
    this.logger.debug('mail for rain send');
  }

  @Cron('0 * * * *')
  async sendISSAlert() {
    const iss = await this.issService.checkISSPosition(48.4167, -71.0667, 10);
    if (iss) {
      this.mailer.sendISSMail();
      this.logger.debug('mail for iss send');
    } else {
      this.logger.debug('no iss');
    }
  }
}
