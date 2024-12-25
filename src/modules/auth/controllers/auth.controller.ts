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
import { CreateUserDto } from '../dto';
import { AuthGuard } from '../guards/auth.guard';
import { LoginDto } from '../dto/user/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.login(loginDto);
    const token = await this.authService.generateJwt(user.id);
    return { user, token };
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.registerLocalUser(createUserDto);
    const token = await this.authService.generateJwt(user.id);

    return { token, user };
  }

  @UseGuards(AuthGuard)
  @Get('validate-token')
  async validateToken(@Request() req: Request) {
    const user = req['user'];
    const token = await this.authService.generateJwt(user.id);
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
