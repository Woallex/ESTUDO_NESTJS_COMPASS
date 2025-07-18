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

// ↓ Ligado ao user.module.ts (users)
@Controller('users')
export class UserController {
    @Post()
    create(@Body() body) {
        return { body };
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
        method: ('put', body, params);
    }

    @Patch(':id')
    upadateParcial(@Body() body, @Param() params) {
        method: ('patch', body, params);
    }

    @Delete(':id')
    delete(@Param() params) {
        return {
            params,
        };
    }
}
