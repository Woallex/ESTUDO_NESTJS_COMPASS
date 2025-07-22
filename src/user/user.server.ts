import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { PrismaServece } from "src/prisma/prismaservece";
import { UpdatePutUserDTO } from "./dto/updatePutUser.dto";
import { UpdatePatchUserDTO } from "./dto/updatePatchUser.dto";

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

    // Atulaizar o BD, espera que todos os dados sejam informados
    async update(id: number, data: UpdatePutUserDTO){

        await this.exists(id);

        return this.prisma.users.update({
            data,
            where: {
                id
            }
        });
    }

    // Atulaizar o BD, os dados podem ser informados parcialmente
    async updatePartial(id: number, data: UpdatePatchUserDTO){

        await this.exists(id);

        return this.prisma.users.update({
            data,
            where: {
                id
            }
        });
    }

    // Deletar dados
    async delete(id: number){

        await this.exists(id);

        return this.prisma.users.delete({
            where: {
                id
            }
        })
    }

    //Criando metodo para ser reutilizado
    async exists(id: number){
        //Colocando uma mensagem de erro para uma exceção, quando o id não existir ele mostrar a mensagem.
        if (!(await this.show(id))){
            throw new NotFoundException(`O usuário ${id} não existe.`)
        }
    }

}
