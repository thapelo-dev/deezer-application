import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { DeezerService } from 'src/app/services/deezer.service';
import { hot, cold, getTestScheduler } from 'jasmine-marbles';

import { SearchArtistEffects } from './search-artist.effects';
import * as fromSearchActions from '../actions/search-artist.actions';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SearchArtistEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchArtistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchArtistEffects,
        provideMockActions(() => actions$),
        HttpClient,
        HttpHandler,
        DeezerService
      ]
    });

    effects = TestBed.inject(SearchArtistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Artist Search Results', () => {
    it('should return list of search artist', inject([DeezerService], (api: DeezerService) => {
      const success = {
        data: [{
          id: 3,
          title: 'test'
        }]
      };

      const scheduler = getTestScheduler()
      spyOn(api, 'searchDeezer').and.callThrough().and.returnValue(of(success));

      scheduler.run(() => {
        const action = fromSearchActions.loadSearchArtists({ searchTerm: 'eminem' });
        const completion = fromSearchActions.loadSearchArtistsSuccess({ searchResults: success });

        actions$ = cold('a', { a: action });
        const expected = cold('400ms b', { b: completion });

        expect(effects.searchArtist$).toBeObservable(expected);
      })

    }));

    it('should catch error for Artist Search', inject([DeezerService], (api: DeezerService) => {
      const error = {
        status: 500,
        message: 'error occured'
      };

      const scheduler = getTestScheduler()
      spyOn(api, 'searchDeezer').and.callThrough().and.returnValue(throwError(error));

      scheduler.run(() => {
        const action = fromSearchActions.loadSearchArtists({ searchTerm: 'don' });
        const completion = fromSearchActions.loadSearchArtistsFailure({ error: error });

        actions$ = cold('a', { a: action });
        const expected = cold('400ms b', { b: completion });

        expect(effects.searchArtist$).toBeObservable(expected);
      })

    }));
  })
});
