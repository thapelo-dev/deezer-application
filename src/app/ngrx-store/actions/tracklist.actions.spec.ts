import * as fromTracklist from './tracklist.actions';

describe('loadTracklists', () => {
  it('should return an action', () => {
    expect(fromTracklist.loadTracklists().type).toBe('[Tracklist] Load Tracklists');
  });
});
