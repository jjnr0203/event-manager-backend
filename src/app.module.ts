import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { config } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().port(),
        DB_NAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_USER: Joi.string().required(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_SECRET: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    // DatabaseModule,
    CoreModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
