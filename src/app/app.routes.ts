import { Routes } from '@angular/router';
import { ArtistComponent } from './componentes/artist/artist.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';

export const ROUTES : Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];