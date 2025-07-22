import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdatePatchUserDTO } from './dto/updatePatchUser.dto';
import { UpdatePutUserDTO } from './dto/updatePutUser.dto';
import { UserService } from './user.server';

// ↓ Ligado ao user.module.ts (users)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create( data );
    }

    //Listar vários registros
    @Get()
    async list() {
        return this.userService.list();
    }

    //      ↓ Nome que aprarece no parametro
    @Get(':id')
    async  show(@Param('id', ParseIntPipe) id: number) {
        return this.userService.show(id);
    }

    @Put(':id')
    async upadate(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.update(id, data);
    }

    @Patch(':id')
    async upadateParcial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updatePartial(id,data);
    }

    @Delete(':id')
    //O ParseIntPipe transforma o id em number
    delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        };
    }
}
