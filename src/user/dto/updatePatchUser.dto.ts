import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './createUser.dto';

//Decoreitor↓
export class UpdatePatchUserDTO extends PartialType(CreateUserDTO){}
