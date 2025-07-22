import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.server';
import { PrismaModule } from 'src/prisma/prismamodule';
import { UserIdChackMiddleware } from 'src/middlewares/userIdCheck.middlewares';

// ↓ construtor
@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService], //Classes que irão prover algum serviço
    exports: [], //Recursos as serem exportados
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdChackMiddleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL
        });
    }
}
