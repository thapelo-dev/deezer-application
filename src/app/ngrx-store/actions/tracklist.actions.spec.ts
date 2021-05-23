import * as fromTracklist from './tracklist.actions';

describe('loadTracklists', () => {
  it('should return an action on Load', () => {
    expect(fromTracklist.loadTracklists.type).toBe('[Tracklist] Load Tracklists');
  });

  it('should return an action on Success', () => {
    expect(fromTracklist.loadTracklistsSuccess.type).toBe('[Tracklist] Load Tracklists Success');
  });

  it('should return an action on Failure', () => {
    expect(fromTracklist.loadTracklistsFailure.type).toBe('[Tracklist] Load Tracklists Failure');
  });
});
