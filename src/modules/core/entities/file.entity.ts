import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('files',{schema:'core'})
export class FileEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
}