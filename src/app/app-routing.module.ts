import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './page-not-found.component';

const appRoutes: Routes = [
   
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: '**', component: PageNotFound },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)

    ],
    exports: [
        RouterModule]

}) export class AppRoutingModule { }