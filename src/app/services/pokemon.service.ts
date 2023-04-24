import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { iPokemon } from '../interfaces/pokemonInterfaces';

const API_GET_ALL_POKEMON = environment.API_GET_ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllEmployee(){
    return this.http.get<iPokemon>(API_GET_ALL_POKEMON);
  }


}
