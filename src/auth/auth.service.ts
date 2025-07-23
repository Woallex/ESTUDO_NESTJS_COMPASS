import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaServece } from "src/prisma/prismaservece";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService, 
        private readonly prisma: PrismaServece
    ){}

    async createToken() {
        //return this.jwtService.sing()
    }

    async ceckeToken(token: string) {
        //return this.jwtService.verify()
    }

    async login(email: string, password: string) {
        const user = await this.prisma.users.findFirst({
            where: {
                email,
                password
            }
        });
        if(!user) {
            throw new UnauthorizedException('E-mail e/ou senha incorretos.')
        }

        return user;
    }

    async forget(email: string) {
        const user = await this.prisma.users.findFirst({
                where: {
                    email
                }
            });
            if(!user) {
                throw new UnauthorizedException('E-mail está incorreto.')
            }

            //TO DO: Enviar o e-mail...

            return true;
        }

        async reset(password: string, token: string) {
            //TO DO: Validaro o token...

            //simulando um id extraido do token
            const id = 0;

            await this.prisma.users.update({
                where: {
                    id,
                },
                data: {
                    password
                },
            });
            return true;
    } 
}