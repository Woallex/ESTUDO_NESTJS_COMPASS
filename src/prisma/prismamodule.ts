import { Module } from "@nestjs/common";
import { PrismaServece } from "./prismaservece";

@Module({
    providers: [PrismaServece], // caminho para o arquivo PrismaServece
    exports: [PrismaServece]
})
export class PrismaModule {}
