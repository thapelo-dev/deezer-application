import * as fromArtistSelectors from "./artist.selectors";

describe('Artist Selectors', () => {
  it('should return artist loader', () => {
    expect(fromArtistSelectors.artistLoader.projector(false)).toBeFalsy();
  });

  it('should return artist error', () => {
    expect(fromArtistSelectors.artistError.projector(true)).toBeTruthy();
  })

  it('should return artist data to be defined', () => {
    const artist = {
      name: 'tobe'
    }
    expect(fromArtistSelectors.artistData.projector(artist)).toEqual({ name: 'tobe' });
  })
});

