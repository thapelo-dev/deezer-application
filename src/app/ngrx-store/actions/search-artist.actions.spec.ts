import * as fromSearchArtist from './search-artist.actions';

describe('loadSearchArtists', () => {
  it('should return an action', () => {
    expect(fromSearchArtist.loadSearchArtists().type).toBe('[SearchArtist] Load SearchArtists');
  });
});
