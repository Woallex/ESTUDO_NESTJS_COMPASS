import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UserIdChackMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        console.log('UserIdChackMiddleware', 'antes');
        if(isNaN(Number(req.params.id)) || Number(req.params.id) <= 0){
            throw new BadRequestException(`ID inválido`);
        }
        console.log('UserIdChackMiddleware', 'depois');
        next();
    }


}
