import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';

const routes: Routes=[
  {path: '', redirectTo: 'TablaPokemon',pathMatch: 'full' },
  {path: 'TablaPokemon', component: PantallaExamenComponent },
  // {path: 'tabla', component: PaginaTablaComponent }
];

@NgModule(
  {
declarations:[],
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule],

})

export class AppRoutingModule{}