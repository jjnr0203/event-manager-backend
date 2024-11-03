import {  Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../services/auth.service';
import { envs } from 'src/config/envs';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) { //tener en cuena la importación de la estrategia correcta
  constructor(
    private authService: AuthService,
  ) {
    // super() llama al constructor de la clase padre
    // y le pasa la configuración para la estrategia de autenticación
    // en este caso, estamos utilizando la estrategia de Google OAuth20
    // la configuración se encuentra en el archivo de entorno .env
    // y se utiliza para establecer la ID del cliente y el secreto
    // así como la URL de callback para que el usuario sea redirigido
    // una vez que se haya autenticado correctamente
    super({
      clientID: envs.googleClientId,
      clientSecret: envs.googleSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['profile', 'email'], // scope es el ámbito de la autenticación
      // en este caso, estamos pidiendo acceso al perfil y al email
      // del usuario
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

    return user;
  }
}
