import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { PrismaServece } from "src/prisma/prismaservece";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaServece) {}
    //No crate apenas o data é obirgátorio
    async create({email, name, password}: CreateUserDTO){
        return await this.prisma.users.create({
            // data: Dados a serem salvos no BD
            data: {
                email, name, password
            }
        })
    }
}
