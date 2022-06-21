import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { POKEMONS } from "./mock-pockemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {

    private pokemonUrl = 'api/pokemons';

    constructor(private http: HttpClient) { }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonUrl);
    }

    getPokemon(id: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(this.pokemonUrl + '/' + id);
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions={
            headers: new HttpHeaders({ 'Content Type':'application/json'})
        }


        return this.http.put<Pokemon>(this.pokemonUrl,pokemon,httpOptions);
    }

    deletePokemon(id: number): Observable<Pokemon> {
        return this.http.delete<Pokemon>(this.pokemonUrl + '/' + id);
    }

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy', 'Merguez'
        ];
    }

    searchPokemons(term: string) : Observable<Pokemon[]> {
        if(!term.trim()) 
            return of([]);

        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)
    }

}