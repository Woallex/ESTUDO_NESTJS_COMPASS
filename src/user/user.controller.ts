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

// ↓ Ligado ao user.module.ts (users)
@Controller('users')
export class UserController {
    @Post()
    create(@Body() { email, name, password }: CreateUserDTO) {
        return { email, name, password };
    }

    //Listar vários registros
    @Get()
    list() {
        return { users: [] };
    }

    //      ↓ Nome que aprarece no parametro
    @Get(':id')
    show(@Param('id', ParseIntPipe) id: number) {
        return { user: {}, id };
    }

    @Put(':id')
    upadate(@Body() { email, name, password }: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'put',
            email, name, password,
            id
        };
    }

    @Patch(':id')
    upadateParcial(@Body() { email, name, password }: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'put',
            email, name, password,
            id
        };
    }

    @Delete(':id')
    //O ParseIntPipe transforma o id em number
    delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        };
    }
}
