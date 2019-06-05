import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonaService } from 'src/servicios/persona.service'
import { PersonaController } from 'src/controladores/persona.controller';
import { Persona } from 'src/models/persona';

@Module({
    //definimos que repositorios seran guardados
    imports: [
        TypeOrmModule.forFeature([Persona])
    ],
    controllers: [PersonaController],
    providers: [PersonaService]

})
export class PersonaModule { }
