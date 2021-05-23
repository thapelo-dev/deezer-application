import * as fromAlbumSelectors from "./album.selectors";

describe('Album Selectors', () => {
  it('should return album loader', () => {
    expect(fromAlbumSelectors.artistAlbumLoader.projector(false)).toBeFalsy();
  });

  it('should return album error', () => {
    expect(fromAlbumSelectors.artistAlbumError.projector(true)).toBeTruthy();
  })

  it('should return album data to be defined', () => {
    const albums = ['test']
    expect(fromAlbumSelectors.artistAlbumList.projector(albums)).toBeGreaterThan(0);
  })
});
