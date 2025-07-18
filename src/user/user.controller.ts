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
    upadate(@Body() body, @Param() params) {
        return {body, params};
    }

    @Patch(':id')
    upadateParcial(@Body() body, @Param() params) {
        return {body, params};;
    }

    @Delete(':id')
    delete(@Param() params) {
        return {
            params,
        };
    }
}
