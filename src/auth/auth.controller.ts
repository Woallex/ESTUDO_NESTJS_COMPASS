import { Body, Controller, Post, UseGuards, Req } from "@nestjs/common";
import { AuthLoginDTO } from "./auth-login.dto";
import { AuthRegisterDTO } from "./auth-register.dto";
import { AuthForgetDTO } from "./auth-forget.dto";
import { AuthResetDTO } from "./auth-reset.dto";
import { UserService } from "src/user/user.server";
import { AuthService } from "./auth.service";
import { AuthGuard } from "src/guards/auth.guard";

@Controller('auth')
export class AuthController{

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ){}

    @Post('login')
    async login(@Body() {email, password}: AuthLoginDTO){
        return this.authService.login(email, password);
    }

    @Post('register')
    async resgister(@Body() body: AuthRegisterDTO){
        return this.authService.register(body);
    }

    @Post('forget')
    async forget(@Body() {email}: AuthForgetDTO){
        return this.authService.forget(email)
    }

    @Post('reset')
    async reset(@Body() {password, token}: AuthResetDTO){
        return this.authService.reset(password, token);
    }

    // rota teste
    @UseGuards(AuthGuard)
    @Post('me')
    async me(@Req() req){
        return {me: 'ok', data: req.tokenPayload};
    }
}