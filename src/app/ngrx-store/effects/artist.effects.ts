import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeezerService } from 'src/app/services/deezer.service';
import { catchError, debounceTime, map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import * as fromArtistActions from '../actions/artist.actions';
import { of } from 'rxjs';


@Injectable()
export class ArtistEffects {

  ArtistInfo$ = createEffect(() => this.actions$.pipe(
    ofType(fromArtistActions.loadArtists),
    switchMap((action) => this.deezerService.getArtistInfo(action.id, null, '')
      .pipe(
        map((response) => fromArtistActions.loadArtistsSuccess({ artistInfo: response })),
        catchError((error) => of(fromArtistActions.loadArtistsFailure({ error })))
      ))
  ));

  constructor(private actions$: Actions, private deezerService: DeezerService) { }

}
