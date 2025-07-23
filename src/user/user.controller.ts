import {
    Body,
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdatePatchUserDTO } from './dto/updatePatchUser.dto';
import { UpdatePutUserDTO } from './dto/updatePutUser.dto';
import { UserService } from './user.server';
import { LogInterceptor } from 'src/interceptors/interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorators';
import { Role } from 'src/AuthorizationRBAC/role.atRBAC';

// ↓ Ligado ao user.module.ts (users)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    //Interceptando para ver o tempo de execução
    @Roles(Role.admin)
    @UseInterceptors(LogInterceptor)
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create( data );
    }

    //Listar vários registros
    @Roles(Role.admin)
    @Get()
    async list() {
        return this.userService.list();
    }

    //      ↓ Nome que aprarece no parametro
    @Roles(Role.admin)
    @Get(':id')
    async show(@ParamId() id: number) {
        console.log({id});
        return this.userService.show(id);
    }

    @Roles(Role.admin)
    @Put(':id')
    async upadate(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
        return this.userService.update(id, data);
    }

    @Roles(Role.admin)
    @Patch(':id')
    async upadateParcial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
        return this.userService.updatePartial(id,data);
    }

    @Roles(Role.admin)
    @Delete(':id')
    //O ParseIntPipe transforma o id em number
    async delete(@ParamId() id: number) {
        return this.userService.delete(id);
    }
}
