import { reducer, initialState } from './artist.reducer';
import * as fromArtistAction from '../actions/artist.actions';

describe('Artist Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('[Artist Info] Load Artist action', () => {
    it('should set correct state values on load', () => {
      const action = fromArtistAction.loadArtists;

      const result = reducer(initialState, action);

      expect(result.artist).toEqual({});
      expect(result.error).toBeFalse()
      expect(result.loading).toBeTrue()
    });

    it('should set correct state values on success', () => {
      const response = {
        name: 'jon'
      };
      const action = fromArtistAction.loadArtistsSuccess({ artistInfo: response });

      const result = reducer(initialState, action);

      expect(result.artist).toEqual(response)
      expect(result.loading).toBeFalse();
      expect(result.error).toBeFalse();
    });

    it('should set correct state values on failure', () => {
      const action = fromArtistAction.loadArtistsFailure;

      const result = reducer(initialState, action);

      expect(result.error).toBeTrue();
      expect(result.loading).toBeFalse();
      expect(result.artist).toEqual({});
    });
  });
});
