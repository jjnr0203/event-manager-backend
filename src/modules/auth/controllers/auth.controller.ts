import {
  Body,
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
import { CreateUserDto } from '../dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    
    const token = await this.authService.login(req.user.id);
    return { token, user: req.user };
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.registerLocalUser(createUserDto);
    const token = await this.authService.login(user.id);

    return { token, user };
  }

  @UseGuards(AuthGuard)
  @Get('validate-token')
  async validateToken(@Request() req) {
    const user = req.user;    
    const token = await this.authService.login(user.id);
    return { token, user };
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Auth' };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async handleRedirect(@Request() req, @Res() res) {
    const token = await this.authService.login(req.user.id);
    return res.redirect('http://localhost:4200/auth/success/' + token);
  }
}
