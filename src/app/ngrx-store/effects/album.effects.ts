import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeezerService } from 'src/app/services/deezer.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromArtistAlbumActions from '../actions/album.actions';
import { of } from 'rxjs';



@Injectable()
export class AlbumEffects {

  ArtistAlbumList$ = createEffect(() => this.actions$.pipe(
    ofType(fromArtistAlbumActions.loadAlbums),
    switchMap((action) => this.deezerService.getArtistInfo(action.id, null, 'albums')
      .pipe(
        map((response) => fromArtistAlbumActions.loadAlbumsSuccess({ artistAlbumResults: response })),
        catchError((error) => of(fromArtistAlbumActions.loadAlbumsFailure({ error })))
      ))
  ));

  constructor(private actions$: Actions, private deezerService: DeezerService) { }

}
