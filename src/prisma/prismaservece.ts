import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

@Injectable()
export class PrismaServece extends PrismaClient implements OnModuleInit {
    // Conexão com banco de dados.
    async onModuleInit() {
        await this.$connect();
    }

    // Garantindo o fim da conexxão quando o aplicação terminar
    async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
        await app.close();
    });
    }
}
