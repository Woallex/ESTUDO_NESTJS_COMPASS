import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

//Decoreitor↓
export class CreateUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minNumbers: 0,
        minLowercase: 0,
        minUppercase: 0,
        minSymbols: 0,
    })
    password: string;
}
