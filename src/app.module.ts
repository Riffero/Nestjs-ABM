import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './modulos/persona.module';

@Module({
  // TypeOrmModule.forRoot() se vincula con el archivo ormconfig.json
  imports: [
    PersonaModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
