/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ViajeEntity } from '../viajes/viajes.entity';
import { PagosEntity } from '../pagos/pagos.entity';


@Entity()
export class UsuarioEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 phone_number: number;

 @Column()
 description: string;
 
 @Column()
 address: string;
 
 @Column()
 city: string;

 @Column()
 type: string;

 @Column()
 image: string;

 @OneToMany(() => ViajeEntity, viaje => viaje.conductor)
 viajesComoConductor: ViajeEntity[];

 @OneToMany(() => ViajeEntity, viaje => viaje.pasajero)
 viajesComoPasajero: ViajeEntity[];

 @OneToMany(() => PagosEntity, pago => pago.usuario)
 pagos: PagosEntity[];
}