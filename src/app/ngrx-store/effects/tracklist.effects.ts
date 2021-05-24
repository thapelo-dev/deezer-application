import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeezerService } from 'src/app/services/deezer.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromTracklistActions from '../actions/tracklist.actions';
import { of } from 'rxjs';



@Injectable()
export class TracklistEffects {

  TopTrackList$ = createEffect(() => this.actions$.pipe(
    ofType(fromTracklistActions.loadTracklists),
    switchMap((action) => this.deezerService.getArtistInfo(action.id, action.params, 'top')
      .pipe(
        map((response) => fromTracklistActions.loadTracklistsSuccess({ topTracksResults: response })),
        catchError((error) => of(fromTracklistActions.loadTracklistsFailure({ error })))
      ))
  ));


  constructor(private actions$: Actions, private deezerService: DeezerService) { }

}
