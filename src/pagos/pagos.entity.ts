import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ViajeEntity } from '../viajes/viajes.entity';

@Entity()
export class PagosEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    monto: number;

    @Column()
    metodo_pago: string;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.pagos)
    usuario: UsuarioEntity;

    @Column()
    pasajeroId: string;

    @ManyToOne(() => ViajeEntity, viaje => viaje.pagos)
    viaje: ViajeEntity;

    @Column()
    viajeId: string;
}