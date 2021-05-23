import { reducer, initialState } from './tracklist.reducer';
import * as fromTopTracksActions from '../actions/tracklist.actions';

describe('Tracklist Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('[Artist TrackList] Load top tracks action', () => {
    it('should set correct state values on load', () => {
      const action = fromTopTracksActions.loadTracklists;

      const result = reducer(initialState, action);

      expect(result.topTracks.length).toEqual(0);
      expect(result.error).toBeFalse()
      expect(result.loading).toBeTrue()
    });

    it('should set correct state values on success', () => {
      const response = {
        data: ['test']
      };
      const action = fromTopTracksActions.loadTracklistsSuccess({ topTracksResults: response });

      const result = reducer(initialState, action);

      expect(result.topTracks.length).toBeGreaterThan(0);
      expect(result.loading).toBeFalse();
      expect(result.error).toBeFalse();
    });

    it('should set correct state values on failure', () => {
      const action = fromTopTracksActions.loadTracklistsFailure;

      const result = reducer(initialState, action);

      expect(result.error).toBeTrue();
      expect(result.loading).toBeFalse();
      expect(result.topTracks.length).toEqual(0);
    });
  });
});
