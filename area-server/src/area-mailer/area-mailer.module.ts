import { Module } from '@nestjs/common';
import { AreaMailerService } from './area-mailer.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { UserSchema } from 'src/user/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/user/schemas/user.schema';
@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          service: 'gmail',
          auth: {
            user: process.env.MAIL,
            pass: process.env.MDP,
          },
        },
        defaults: {
          from: '"AREA" <area@gmail.com>',
        },
      }),
    }),
  ],
  providers: [AreaMailerService, UserService],
  exports: [AreaMailerService],
})
export class AreaMailerModule {}
