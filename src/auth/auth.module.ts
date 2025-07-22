import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [JwtModule.register({
        secret: `asdfgqwertRf#$%jbjlsjdijkngsijknskjh`
    })]
})
export class Authmodule {}