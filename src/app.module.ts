import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './telegram/google.strategy';

@Module({
  imports: [
  TelegramModule,ConfigModule.forRoot({isGlobal:true}),
  MongooseModule.forRoot(process.env.MONGO_URI),
  JwtModule.register({
    secret:"secret",
    signOptions: {
      expiresIn: '1d'
    }
  }),
  
],
  controllers: [AppController],
  providers: [AppService,GoogleStrategy],
})
export class AppModule {}
