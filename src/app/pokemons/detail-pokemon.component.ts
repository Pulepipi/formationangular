import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';


@Component({
        selector: 'detail-pokemon',
        templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit, OnDestroy {
        constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) { }
        private routeSub: Subscription;
        public pokemon: Pokemon;

        ngOnInit() {
                let id: number;

                //    this.pokemons = POKEMONS;

                this.routeSub = this.route.params.subscribe(params => {
                        id = params['id'];
                        this._pokemonService.getPokemon(id).subscribe(data => {
                                this.pokemon = data;
                        });
                })
                /*
                for (let index = 0; index < this.pokemons.length; index++ )                        
                {
                   if (id == this.pokemons[index].id ) 
                        this.pokemon = this.pokemons[index];
                }
                })

               this.pokemon = this.pokemons.find(x => x.id == id) ;*/
                //    this.pokemon = this.pokemons.filter(x => x.id == id)[0];

        }

        goBack(): void {
                this.router.navigate(['/pokemon/all']);
        }

        goEdit(id: number): void {
                let link = (['/pokemon/edit', id]);
                this.router.navigate(link);
        }

        goDelete(id: number): void {
                this._pokemonService.deletePokemon(id).subscribe(() => {
                        this.goBack();
                });
        }




        ngOnDestroy() {
                this.routeSub.unsubscribe();
        }
}