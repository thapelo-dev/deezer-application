import { reducer, initialState } from './search-artist.reducer';
import * as fromSearchActions from '../actions/search-artist.actions';

describe('SearchArtist Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });


  describe('[Search Artist] Load search action', () => {
    it('should set correct state values on load', () => {
      const action = fromSearchActions.loadSearchArtists;

      const result = reducer(initialState, action);

      expect(result.artists.length).toEqual(0);
      expect(result.error).toBeFalse()
      expect(result.loading).toBeTrue()
    });

    it('should set correct state values on success', () => {
      const response = {
        data: [{
          artist: ['test'],
          albums: 3
        }]

      };
      const action = fromSearchActions.loadSearchArtistsSuccess({ searchResults: response });

      const result = reducer(initialState, action);

      expect(result.artists.length).toBeGreaterThan(0);
      expect(result.loading).toBeFalse();
      expect(result.error).toBeFalse();
    });

    it('should set correct state values on failure', () => {
      const action = fromSearchActions.loadSearchArtistsFailure;

      const result = reducer(initialState, action);

      expect(result.error).toBeTrue();
      expect(result.loading).toBeFalse();
      expect(result.artists.length).toEqual(0);
    });
  });
});
