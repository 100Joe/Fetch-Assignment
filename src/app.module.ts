import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { accountsController } from './accounts/accounts.controller';
import { AccountService } from './accounts/account.service';

@Module({
  imports: [],
  controllers: [AppController, accountsController],
  providers: [AppService, AccountService],
})
export class AppModule {}
