import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prismamodule";


@Module({
    imports: [JwtModule.register({
        secret: `asdfgqwertRf#$%jbjlsjdijkngsijknskjh`
        }),
        UserModule,
        PrismaModule,
    ],
    controllers: [AuthController]
})
export class Authmodule {}