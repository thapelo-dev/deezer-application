import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { DeezerService } from 'src/app/services/deezer.service';
import { hot, cold } from 'jasmine-marbles';
import { TracklistEffects } from './tracklist.effects';
import * as fromTopTracksActions from '../actions/tracklist.actions';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TracklistEffects', () => {
  let actions$: Observable<any>;
  let effects: TracklistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TracklistEffects,
        provideMockActions(() => actions$),
        HttpClient,
        HttpHandler
      ]
    });

    effects = TestBed.inject(TracklistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Artist Top Track List', () => {
    it('should return artist top tracks', inject([DeezerService], (api: DeezerService) => {
      const success = {
        data: [{
          id: 3,
          title: 'test',
          duration: 323
        }],
        status: 200
      };

      spyOn(api, 'getArtistInfo').and.callThrough().and.returnValue(of(success));

      const action = fromTopTracksActions.loadTracklists({ id: 23, params: { limit: 10 } });
      const completion = fromTopTracksActions.loadTracklistsSuccess({ topTracksResults: success });

      actions$ = cold('a', { a: action });
      const expected = cold('b', { b: completion });

      expect(effects.TopTrackList$).toBeObservable(expected);
    }));

    it('should catch error for Artist top tracks', inject([DeezerService], (api: DeezerService) => {
      const error = {
        status: 500,
        message: 'error occured'
      };

      spyOn(api, 'getArtistInfo').and.callThrough().and.returnValue(throwError(error));

      const action = fromTopTracksActions.loadTracklists({ id: 23, params: { limit: 10 } });
      const completion = fromTopTracksActions.loadTracklistsFailure({ error: error });

      actions$ = cold('a', { a: action });
      const expected = cold('b', { b: completion });

      expect(effects.TopTrackList$).toBeObservable(expected);
    }));
  })

});
