import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './pokemons/border-card.directive';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe';
import { PageNotFound } from './page-not-found.component';
import { PokemonModule } from './pokemons/pokemon.module';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService } from './pokemons/in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule  } from './login/login-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFound,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
