import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ViajeEntity } from '../viajes/viajes.entity';

@Entity()
export class PagosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    monto: number;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.pagos)
    usuario: UsuarioEntity;

    @ManyToOne(() => ViajeEntity, viaje => viaje.pagos)
    viaje: ViajeEntity;
}