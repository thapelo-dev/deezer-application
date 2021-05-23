import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { TrackComponent } from './components/track/track.component';
import { HomeComponent } from './components/home/home.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx-store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ArtistEffects } from './ngrx-store/effects/artist.effects';
import { HttpClientModule } from '@angular/common/http';
import * as fromRoot from './ngrx-store/reducers';
import { AlbumEffects } from './ngrx-store/effects/album.effects';
import { TracklistEffects } from './ngrx-store/effects/tracklist.effects';
import { SearchArtistEffects } from './ngrx-store/effects/search-artist.effects';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<fromRoot.DeezerState>>('root reducer');

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    AlertMessageComponent,
    HeaderComponent,
    FooterComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    HomeComponent,
    DetailedViewComponent,
    ArtistInfoComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ArtistEffects, AlbumEffects, TracklistEffects, SearchArtistEffects])
  ],
  providers: [
    { provide: REDUCER_TOKEN, useValue: fromRoot.reducers }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
