import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit,OnDestroy {
  pokemon: Pokemon = null;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    let id: number;
    this.routeSub = this.route.params.subscribe(params => {
      id = params['id'];
      this._pokemonService.getPokemon(id).subscribe(
        data =>{this.pokemon =data;});
    });

  
  
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
} 
}
