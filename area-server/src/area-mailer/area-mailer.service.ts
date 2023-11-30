import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { UserService } from '../user/user.service';

@Injectable()
export class AreaMailerService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly users: UserService,
  ) {}

  async sendSnowMail(meteo: string, time: string[]): Promise<boolean> {
    const userList: Array<string> = await this.users.getAllMail();

    userList.forEach((mail) => {
      this.mailerService.sendMail({
        to: mail,
        from: 'AREA',
        subject: 'Area Meteo Alert !',
        text: 'welcome',
        html: ` 
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
              <h2 style="color: #333333;">Bonjour ${mail},</h2>
              <hr style="margin: 30px 0;">
              <p style="font-size: 16px; color: #777777;">Il va bientôt ${meteo} à Chicoutimi !</p>
              <p>il va neiger à : ${time}</p>
          </div>
        </div>
        `,
      });
    });
    return true;
  }

  async sendRainMail(meteo: string, time: string[]): Promise<boolean> {
    const userList: Array<string> = await this.users.getAllMail();

    userList.forEach((mail) => {
      this.mailerService.sendMail({
        to: mail,
        from: 'AREA',
        subject: 'Area Meteo Alert !',
        text: 'welcome',
        html: ` 
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
              <h2 style="color: #333333;">Bonjour ${mail},</h2>
              <hr style="margin: 30px 0;">
              <p style="font-size: 16px; color: #777777;">Il va bientôt ${meteo} à Chicoutimi !</p>
              <p>il va neiger à : ${time}</p>
          </div>
        </div>
        `,
      });
    });
    return true;
  }
}
