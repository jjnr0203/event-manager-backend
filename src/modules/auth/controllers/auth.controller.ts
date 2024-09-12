import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    handleLogin(){
        return {msg:'Google Auth'}
    }

    @Get('google/redirect')
    handleRedirect(){
        return {msg:'Google redirect ok'}
    }

}

