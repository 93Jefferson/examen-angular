import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDataPokemon } from 'src/app/interfaces/pokemonInterfaces';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent {
  listPokemon: IDataPokemon[] = [];
  columnTabla: any;
  loadingVisible = false;

  constructor(private ruta: Router,    
    private empleadoService: PokemonService,
    private message: MessageService
    ){
    
      


  }

  ngOnInit(): void {

    this.loadingVisible = true;

    this.iniColumnTabla();
  
    this.empleadoService.getAllEmployee().subscribe({
      next: (datos) => {
        this.loadingVisible = false;
        console.log(datos);
        this.listPokemon = datos.results;
        this.message.add({ severity: 'success', summary: 'Success', detail: 'Proceso exitoso!' });

      },
      error: (err)=>{
        this.loadingVisible = false;
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema! codigo error: '+err.status });
        console.log(err);
      }
    });
  }

  iniColumnTabla(){
    this.columnTabla=[
      {
        field:'name', header:'Nombre Pokemon'
      },
      {
        field:'url', header:'Imagen'
      }
  ];
  }

}
