import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  Response,
  UseGuards,
} from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/google-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { LoginDto } from '../dto/user/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {  
    const token = await this.authService.login(req.user.id)
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
    return res.json('http://localhost:4200/auth/success/'+ token)
  }
}
