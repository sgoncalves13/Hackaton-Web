import {IsNotEmpty, IsString, IsNumber, IsUrl, IsDate} from 'class-validator';

export class ViajeDto {

    @IsString()
    @IsNotEmpty()
    readonly origen: string;

    @IsString()
    @IsNotEmpty()
    readonly destino: string;
    
    @IsDate()
    @IsNotEmpty()
    readonly fechaInicio: Date;
    
    @IsDate()
    @IsNotEmpty()
    readonly fechaFin: Date;
    
    @IsNumber()
    @IsNotEmpty()
    readonly duracionHoras: number;
    
    @IsString()
    @IsNotEmpty()
    readonly conductorId: string;

    @IsString()
    @IsNotEmpty()
    readonly pasajeroId: string;

}
