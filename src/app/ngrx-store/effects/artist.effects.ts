import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeezerService } from 'src/app/services/deezer.service';
import { catchError, debounceTime, map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import * as fromArtistActions from '../actions/artist.actions';
import { of } from 'rxjs';


@Injectable()
export class ArtistEffects {

  searchArtist$ = createEffect(() => this.actions$.pipe(
    ofType(fromArtistActions.loadArtists),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap((action) => this.deezerService.searchDeezer(action.searchTerm)
      .pipe(
        map((response) => fromArtistActions.loadArtistsSuccess({ searchResults: response })),
        catchError((searchError) => of(fromArtistActions.loadArtistsFailure({ error: searchError })))
      ))
  ));

  constructor(private actions$: Actions, private deezerService: DeezerService) { }

}
