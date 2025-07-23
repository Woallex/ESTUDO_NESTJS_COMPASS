import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prismamodule";
import { AuthService } from "./auth.service";


@Module({
    imports: [JwtModule.register({
        secret: `asdfgqwertRf#$%jbjlsjdijkngsijknskjh`
        }),
        UserModule,
        PrismaModule,
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class Authmodule {}