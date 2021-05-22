import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeezerService } from 'src/app/services/deezer.service';
import { catchError, debounceTime, map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import * as fromSearchArtistActions from '../actions/search-artist.actions';
import { of } from 'rxjs';


@Injectable()
export class SearchArtistEffects {

  searchArtist$ = createEffect(() => this.actions$.pipe(
    ofType(fromSearchArtistActions.loadSearchArtists),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap((action) => this.deezerService.searchDeezer(action.searchTerm)
      .pipe(
        map((response) => fromSearchArtistActions.loadSearchArtistsSuccess({ searchResults: response })),
        catchError((searchError) => of(fromSearchArtistActions.loadSearchArtistsFailure({ error: searchError })))
      ))
  ));

  constructor(private actions$: Actions, private deezerService: DeezerService) { }

}
