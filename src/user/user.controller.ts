import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdatePutUserDTO } from './dto/updatePutUser.dto';
import { UpdatePatchUserDTO } from './dto/updatePatchUser.dto';

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
    show(@Param() params) {
        return { user: {}, params };
    }

    @Put(':id')
    upadate(@Body() { email, name, password }: UpdatePutUserDTO, @Param() params) {
        return {
            method: 'put',
            email, name, password,
            params,
        };
    }

    @Patch(':id')
    upadateParcial(@Body() { email, name, password }: UpdatePatchUserDTO, @Param() params) {
        return {
            method: 'put',
            email, name, password,
            params,
        };
    }

    @Delete(':id')
    delete(@Param() params) {
        return {
            params,
        };
    }
}
