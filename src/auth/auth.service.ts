import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { users } from "generated/prisma";
import { PrismaServece } from "src/prisma/prismaservece";
import { AuthRegisterDTO } from "./auth-register.dto";
import { UserService } from "src/user/user.server"; // ajuste no import, se necessário

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaServece,
    private readonly userService: UserService
  ) {}

  async createToken(user: users) {
    return {
      accessToken: this.jwtService.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: "7 days",
          subject: String(user.id),
          issuer: "login",
          audience: "users",
        }
      ),
    };
  }

  async checkToken(token: string) {
    // TODO: Implementar verificação de token
    // return this.jwtService.verify(token);
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findFirst({
      where: { email, password },
    });

    if (!user) {
      throw new UnauthorizedException("E-mail e/ou senha incorretos.");
    }

    return this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prisma.users.findFirst({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException("E-mail está incorreto.");
    }

    // TODO: Enviar e-mail de recuperação
    return true;
  }

  async reset(password: string, token: string) {
    // TODO: Validar o token

    // Simulando um id extraído do token
    const id = 0;

    const user = await this.prisma.users.update({
      where: { id },
      data: { password },
    });

    return this.createToken(user);
  }

  async register(data: AuthRegisterDTO) {
    const user = await this.userService.create(data);
    return this.createToken(user);
  }
}
