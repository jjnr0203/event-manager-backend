import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../services/auth.service';
import { config } from 'src/config/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(config.KEY)
    private configService: ConfigType<typeof config>,
    private authService: AuthService,
  ) {
    super({
      clientID: configService.googleCredentials.clientID,
      clientSecret: configService.googleCredentials.clientSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const user = await this.authService.validateOAuthUser({
      email: profile.emails[0].value,
      informationUser: {
        name: profile.name.givenName,
        lastname: profile.name.familyName,
      },
    });

    const token = this.authService.login(user.id);
    done(null,token)
    // return user;
  }
}
