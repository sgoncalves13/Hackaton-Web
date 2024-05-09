import {IsNotEmpty, IsString, IsNumber, IsUrl} from 'class-validator';

export class UsuarioDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly phone_number: number;
    
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    
    @IsString()
    @IsNotEmpty()
    readonly address: string;
    
    @IsString()
    @IsNotEmpty()
    readonly city: string;

    @IsString()
    @IsNotEmpty()
    readonly type: string;
    
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;

}
