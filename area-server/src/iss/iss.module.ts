import { Module } from '@nestjs/common';
import { IssService } from './iss.service';

@Module({
  providers: [IssService],
})
export class IssModule {}
