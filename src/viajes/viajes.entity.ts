import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { PagosEntity } from '../pagos/pagos.entity';

@Entity()
export class ViajeEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    origen: string;

    @Column()
    destino: string;

    @Column({ type: 'date' })
    fechaInicio: Date;

    @Column({ type: 'date' })
    fechaFin: Date;

    @Column({ type: 'int' })
    duracionHoras: number;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.viajesComoConductor)
    conductor: UsuarioEntity;

    @Column()
    conductorId: string;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.viajesComoPasajero)
    pasajero: UsuarioEntity;

    @Column()
    pasajeroId: string;

    @OneToMany(() => PagosEntity, pago => pago.viaje)
    pagos: PagosEntity[];
}
