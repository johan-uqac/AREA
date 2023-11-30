import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AreaMailerService } from 'src/area-mailer/area-mailer.service';
import { MeteoServiceService } from 'src/meteo-service/meteo-service.service';

@Injectable()
export class ServicesService implements OnModuleInit {
  private readonly logger = new Logger(ServicesService.name);
  constructor(
    private readonly mailer: AreaMailerService,
    private readonly meteo: MeteoServiceService,
  ) {}

  async onModuleInit(): Promise<void> {
    // this.database.servicesDb.set({
    //   action: [
    //     {
    //       id: '0',
    //       name: 'Quand il neige',
    //       description: 'Quand il neige à Saguenay',
    //       platform: 'meteo',
    //     },
    //     {
    //       id: '1',
    //       name: 'E-mail',
    //       description: 'Quand je reçois un email',
    //       platform: 'gmail',
    //     },
    //     {
    //       id: '2',
    //       name: "Quand j'écoute une musique",
    //       description: "Quand j'écoute une musique sur Spotify",
    //       platform: 'spotify',
    //     },
    //     {
    //       id: '3',
    //       name: 'Quand la neige arrive',
    //       description: 'Si il neige dans 1 heure à Saguenay',
    //       platform: 'meteo',
    //     },
    //   ],
    //   reaction: [
    //     {
    //       id: '0',
    //       name: 'Envoie e-mail',
    //       description: 'Envoie un e-mail avec les données météos',
    //       platform: 'gmail',
    //     },
    //     {
    //       id: '1',
    //       name: 'Lance une musique',
    //       description: 'Lance jinggle bells',
    //       platform: 'spotify',
    //     },
    //     {
    //       id: '2',
    //       name: 'Ajoute une musique à la playlist',
    //       description: 'Ajoute une musique de noël à la playlist AREA',
    //       platform: 'spotify',
    //     },
    //     {
    //       id: '3',
    //       name: 'Mets la musique en pause',
    //       description: 'Mets la musique en cours de lecture en pause',
    //       platform: 'spotify',
    //     },
    //   ],
    // });
  }

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }

  @Cron('20 0 * * *')
  async sendSnowAlert() {
    const snowDay = await this.meteo.getSnowDay();
    this.mailer.sendSnowMail('neiger', snowDay);
    this.logger.debug('mail for snow send');
  }

  @Cron('20 0 * * *')
  async sendRainAlert() {
    const rainDay = await this.meteo.getRainDay();
    this.mailer.sendRainMail('pleuvoir', rainDay);
    this.logger.debug('mail for rain send');
  }
}
