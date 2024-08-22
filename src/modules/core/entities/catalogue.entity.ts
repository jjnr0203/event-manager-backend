import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('catolgues',{schema:'core'})
export class CataloguesEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true
    })
    createdAt:string;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
    })
    name:string;

    @Column({
        name: 'type',
        type: 'varchar',
        nullable: false,
    })
    type:string;

    @Column({
        name: 'code',
        type: 'int',
        nullable: false,
    })
    code:number;

}