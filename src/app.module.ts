import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Authmodule } from './auth/auth.module';

@Module({
    imports: [UserModule, Authmodule],
    controllers: [AppController],
    providers: [AppService],
    exports: [AppService],
})
export class AppModule {}
