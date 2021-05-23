import * as fromSearchArtist from './search-artist.selectors';

describe('SearchArtist Selectors', () => {
  it('should return search artist loader', () => {
    expect(fromSearchArtist.searchArtistsLoader.projector(false)).toBeFalsy();
  });

  it('should return search artist error', () => {
    expect(fromSearchArtist.searchArtistsError.projector(true)).toBeTruthy();
  })

  it('should return search artist data to be defined', () => {
    const searchArtist = ['test']
    expect(fromSearchArtist.searchArtistsList.projector(searchArtist)).toBeGreaterThan(0);
  })
});
