import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
 pokemons =['Bulbasaur','Ivysaur','Venosaur','Charmander']

 constructor(public PokemonService: PokemonService) {}

}
