import * as fromSearchArtist from './search-artist.actions';

describe('loadSearchArtists', () => {
  it('should return an action on Load', () => {
    expect(fromSearchArtist.loadSearchArtists.type).toBe('[SearchArtist] Load SearchArtists');
  });

  it('should return an action on success', () => {
    expect(fromSearchArtist.loadSearchArtistsSuccess.type).toBe('[SearchArtist] Load SearchArtists Success');
  });

  it('should return an action on Failure', () => {
    expect(fromSearchArtist.loadSearchArtistsFailure.type).toBe('[SearchArtist] Load SearchArtists Failure');
  });
});
