import * as fromAlbum from './album.actions';

describe('loadAlbums', () => {
  it('should return an action type load', () => {
    expect(fromAlbum.loadAlbums.type).toBe('[Album] Load Albums');
  });

  it('should return an action type success', () => {
    expect(fromAlbum.loadAlbumsSuccess.type).toBe('[Album] Load Albums Success');
  });

  it('should return an action type failure', () => {
    expect(fromAlbum.loadAlbumsFailure.type).toBe('[Album] Load Albums Failure');
  });
});
