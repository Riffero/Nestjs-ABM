import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from 'src/models/persona';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {

    
    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>){}

    //METODOS ABM CONTRA LA BASE DE DATOS
    //el metodo .save() funciona como insert y update
    async nuevoPersona(nuevaPersona: Persona): Promise<Persona>{
        const persona = await this.personaRepository.save(nuevaPersona);
        return persona;
    }

    async mostrarPersona(id:string):Promise<Persona>{
        const persona = await this.personaRepository.findOne(id);
        return persona;
    }

    async listarPersonas():Promise<Persona[]>{
        const personas = await this.personaRepository.find();
        return personas;
    }

    async actualizarPersona(id:string,updatePersona: Persona){
        const persona = await this.personaRepository.update(id,updatePersona);
        return persona;
    }

    async eliminarPersona(id:string){
        await this.personaRepository.delete(id);
    }

}
