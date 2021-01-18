import { Routes } from '@angular/router';
import { ArtistComponent } from './componentes/artist/artist.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { IntroductorComponent } from './components/shared/introductor/introductor.component';

export const ROUTES : Routes = [
    { path: 'about', component: IntroductorComponent},
    { path: 'new-releases', component: HomeComponent},
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'about'},
    { path: '**', pathMatch: 'full', redirectTo: 'about' }
];