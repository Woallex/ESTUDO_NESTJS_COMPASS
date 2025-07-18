import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

// ↓ construtor
@Module({
    imports: [],
    controllers: [UserController],
    providers: [], //Classes que irão prover algum serviço
    exports: [], //Recursos as serem exportados
})
export class UserModule {}
