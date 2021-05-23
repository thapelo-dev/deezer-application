import { reducer, initialState } from './album.reducer';
import * as fromAlbumActions from '../actions/album.actions';

describe('Album Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('[Artist Albums] Load Albums action', () => {
    it('should set correct state values on load', () => {
      const action = fromAlbumActions.loadAlbums;

      const result = reducer(initialState, action);

      expect(result.artistAlbums.length).toEqual(0);
      expect(result.error).toBeFalse()
      expect(result.loading).toBeTrue()
    });

    it('should set correct state values on success', () => {
      const response = {
        data: ['test']
      };
      const action = fromAlbumActions.loadAlbumsSuccess({ artistAlbumResults: response });

      const result = reducer(initialState, action);

      expect(result.artistAlbums.length).toBeGreaterThan(0);
      expect(result.loading).toBeFalse();
      expect(result.error).toBeFalse();
    });

    it('should set correct state values on failure', () => {
      const action = fromAlbumActions.loadAlbumsFailure;

      const result = reducer(initialState, action);

      expect(result.error).toBeTrue();
      expect(result.loading).toBeFalse();
      expect(result.artistAlbums.length).toEqual(0);
    });
  });
});
