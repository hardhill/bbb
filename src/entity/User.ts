import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
    
    constructor(fn:string, lastname:string, age:number){
        this.firstName = fn
        this.lastName = lastname
        this.age = age
    }
}
