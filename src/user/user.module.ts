import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.server';
import { PrismaModule } from 'src/prisma/prismamodule';

// ↓ construtor
@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService], //Classes que irão prover algum serviço
    exports: [], //Recursos as serem exportados
})
export class UserModule {}
