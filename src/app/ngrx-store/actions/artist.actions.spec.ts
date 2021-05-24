import * as fromArtist from './artist.actions';

describe('loadArtists', () => {
  it('should return an action type load', () => {
    expect(fromArtist.loadArtists.type).toBe('[Artist] Load Artists');
  });

  it('should return an action type success', () => {
    expect(fromArtist.loadArtistsSuccess.type).toBe('[Artist] Load Artists Success');
  });

  it('should return an action type failure', () => {
    expect(fromArtist.loadArtistsFailure.type).toBe('[Artist] Load Artists Failure');
  });
});
