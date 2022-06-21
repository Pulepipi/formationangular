import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokmemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@NgModule(
    {
        declarations: [ // Composants
            BorderCardDirective,
            DetailPokemonComponent,
            ListPokemonComponent,
            PokemonTypeColorPipe,
            PokemonFormComponent,
            EditPokemonComponent,
            SearchPokemonComponent

        ],
        imports: [ // Modules
            CommonModule,
            FormsModule,
            PokmemonRoutingModule
        
        ],

        providers: [
            AuthGuardService,
            AuthService,
            PokemonService
        ]
    })
export class PokemonModule { }
