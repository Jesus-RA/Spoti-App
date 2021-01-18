import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistComponent } from './componentes/artist/artist.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

// Importar rutas
import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { IntroductorComponent } from './components/shared/introductor/introductor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    DomsafePipe,
    IntroductorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
