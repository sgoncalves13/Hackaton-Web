import {IsNotEmpty, IsString, IsNumber} from 'class-validator';

export class PagoDto {

    @IsNumber()
    @IsNotEmpty()
    readonly monto: number;

    @IsString()
    @IsNotEmpty()
    readonly metodo_pago: string;
    
    @IsString()
    @IsNotEmpty()
    readonly pasajeroId: string;
    
    @IsString()
    @IsNotEmpty()
    readonly viajeId: string;

}
