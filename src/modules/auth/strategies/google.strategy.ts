import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../services/auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_SECRET'),
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }
 

  async validate(accessToken: string, refreshToken: string, profile: Profile) {

    const user = await this.authService.validateOAuthUser({
      email: profile.emails[0].value,
      informationUser: {
        name: profile.name.givenName,
        lastname: profile.name.familyName,
      },
    });

    return user || null;
  }
}
