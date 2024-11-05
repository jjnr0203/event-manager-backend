import {
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/google-auth.guard';
import { AuthService } from '../services';
import { LocalAuthGuard } from '../guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {  
    const token = await this.authService.login(req.user.id)
    return {token}
  }

  @Post('register')
  @UseGuards(LocalAuthGuard)
  async register(@Request() req) {  
    const token = await this.authService.registerLocalUser(req.user.id)
    return {token}
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Auth' };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async handleRedirect(@Request() req, @Res() res) {
    const token = await this.authService.login(req.user.id)
    return res.redirect('http://localhost:4200/auth/success/'+ token)
  }
}
