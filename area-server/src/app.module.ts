import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AreaMailerModule } from './area-mailer/area-mailer.module';
import { IssModule } from './iss/iss.module';
@Module({
  imports: [
    UserModule,
    AreaMailerModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    IssModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
