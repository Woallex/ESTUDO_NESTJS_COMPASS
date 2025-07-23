import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDTO } from "./auth-login.dto";
import { AuthRegisterDTO } from "./auth-register.dto";
import { AuthForgetDTO } from "./auth-forget.dto";
import { AuthResetDTO } from "./auth-reset.dto";
import { UserService } from "src/user/user.server";
import { AuthService } from "./auth.service";

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

    @Post('me')
    async me(@Body() body){
        return this.authService.checkToken(body.token);
    }
}