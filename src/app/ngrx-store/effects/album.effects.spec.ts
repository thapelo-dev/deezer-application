import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { AlbumEffects } from './album.effects';
import { DeezerService } from 'src/app/services/deezer.service';
import * as fromAlbumList from '../actions/album.actions';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AlbumEffects', () => {
  let actions$: Observable<any>;
  let effects: AlbumEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlbumEffects,
        provideMockActions(() => actions$),
        HttpClient,
        HttpHandler,
      ]
    });

    effects = TestBed.inject(AlbumEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });


  describe('Artist Album List', () => {
    it('should return artist Album List', inject([DeezerService], (api: DeezerService) => {
      const success = {
        data: [{
          id: 3,
          title: 'test'
        }],
        status: 200
      };

      spyOn(api, 'getArtistInfo').and.callThrough().and.returnValue(of(success));

      const action = fromAlbumList.loadAlbums({ id: 23 });
      const completion = fromAlbumList.loadAlbumsSuccess({ artistAlbumResults: success });

      actions$ = cold('a', { a: action });
      const expected = cold('b', { b: completion });

      expect(effects.ArtistAlbumList$).toBeObservable(expected);
    }));

    it('should catch error for Artist Album', inject([DeezerService], (api: DeezerService) => {
      const error = {
        status: 500,
        message: 'error occured'
      };

      spyOn(api, 'getArtistInfo').and.callThrough().and.returnValue(throwError(error));

      const action = fromAlbumList.loadAlbums({ id: 23 });
      const completion = fromAlbumList.loadAlbumsFailure({ error: error });

      actions$ = cold('a', { a: action });
      const expected = cold('b', { b: completion });

      expect(effects.ArtistAlbumList$).toBeObservable(expected);
    }));
  })

});
