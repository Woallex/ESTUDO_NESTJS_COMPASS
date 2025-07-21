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

    // Encontra todos os dados no BD
    async list() {
        return this.prisma.users.findMany();
    }

    //Encontrando dados pelo id
    async show(id: number){
        return this.prisma.users.findUnique({
            where: {
                id,
            }
        });
    }
}
