import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";


@Entity()
export class Persona {

    @ObjectIdColumn()
    private id:ObjectID
    
    @Column()
    private nombre:string;

    @Column()
    private edad:number;

    @Column()
    private telefono:string;

    @Column()
    private esCasado:boolean;

    

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number){
        this.edad = edad;
    }

    getTelefono():string{
        return this.telefono;
    }
    setTelefono(telefono:string){
        this.telefono = telefono;
    }

    getEsCasado():boolean{
        return this.esCasado;
    }
    setEsCasado(esCasado:boolean){
        this.esCasado = esCasado;
    }
}
