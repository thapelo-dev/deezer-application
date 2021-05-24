import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { DeezerService } from 'src/app/services/deezer.service';
import { hot, cold } from 'jasmine-marbles';
import { ArtistEffects } from './artist.effects';
import * as fromArtistActions from '../actions/artist.actions';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ArtistEffects', () => {
  let actions$: Observable<any>;
  let effects: ArtistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArtistEffects,
        provideMockActions(() => actions$),
        HttpClient,
        HttpHandler,
      ]
    });

    effects = TestBed.inject(ArtistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });


  describe('Artist Information', () => {
    it('should return artist information', inject([DeezerService], (api: DeezerService) => {
      const success = {
        data: {
          id: 3,
          name: 'john'
        },
        status: 200
      };

      spyOn(api, 'getArtistInfo').and.callThrough().and.returnValue(of(success));

      const action = fromArtistActions.loadArtists({ id: 23 });
      const completion = fromArtistActions.loadArtistsSuccess({ artistInfo: success });

      actions$ = cold('a', { a: action });
      const expected = cold('b', { b: completion });

      expect(effects.ArtistInfo$).toBeObservable(expected);
    }));

    it('should catch error for Artist information', inject([DeezerService], (api: DeezerService) => {
      const error = {
        status: 500,
        message: 'error occured'
      };

      spyOn(api, 'getArtistInfo').and.callThrough().and.returnValue(throwError(error));

      const action = fromArtistActions.loadArtists({ id: 23 });
      const completion = fromArtistActions.loadArtistsFailure({ error: error });

      actions$ = cold('a', { a: action });
      const expected = cold('b', { b: completion });

      expect(effects.ArtistInfo$).toBeObservable(expected);
    }));
  })
});
