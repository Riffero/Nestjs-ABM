import { Controller, Post, Res, HttpStatus, Body, Get, NotFoundException, Param, Delete, Put, Query } from '@nestjs/common';
import { PersonaService } from 'src/servicios/persona.service';
import { Persona } from 'src/models/persona';


@Controller('persona')
export class PersonaController {

    constructor(private _personaService: PersonaService){}
    
    // rutas a llamar desde el lado del cliente
    @Post('/crear')
    nuevaPersona(@Res() res, @Body() crearPersona:Persona){
        const persona = this._personaService.nuevoPersona(crearPersona)
        return res.status(HttpStatus.OK).json({persona});
    }

    @Get('/')
    async getListClientes(@Res() res):Promise<Persona[]>{
        const persona = await this._personaService.listarPersonas();
        return res.status(HttpStatus.OK).json({
            persona
        });
    }
    
    @Get('/:idPersona')
    async getCliente(@Res() res, @Param('idPersona') idPersona ){
       const personas = await this._personaService.mostrarPersona(idPersona);
       //compruebo si la persona buscada existe, sino lanzo una exepcion
       if(!personas) throw new NotFoundException("La persona no existe no existe");
       return res.status(HttpStatus.FOUND).json(personas);
    }

    @Delete('/delete/:idPersona')
    async deleteCliente(@Res() res, @Param('idPersona') idPersona){
        await this._personaService.eliminarPersona(idPersona);
        return res.status(HttpStatus.OK).json({
            message: 'Registro eliminado'
        });
    }

    @Put('/update/:idPersona')
    async updateCliente(@Res() res, @Body() updatePersona: Persona, @Param('idPersona') idPersona){
        const persona = await this._personaService.actualizarPersona(idPersona, updatePersona);
        if(!persona) throw new NotFoundException("La Persona no existe");
        return res.status(HttpStatus.OK).json({
            message: 'persona creada'
        });
    }
}
