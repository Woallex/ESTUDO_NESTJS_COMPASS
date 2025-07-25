import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.server";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    async canActivate(context: ExecutionContext) {

        const request = context.switchToHttp().getRequest();
        const {authorization} = request.headers;
        console.log({authorization});

        try {
          const data = this.authService.checkToken((authorization ?? '').split(' ')[1]);

            request.tokenPayLoad = data;
                            //Carregar o dodos do BD e inserir no User
            request.user = await this.userService.show(data.id);

            return true;
        } catch (e) {
            return false;
        }
    }
}
