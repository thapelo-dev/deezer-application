import * as fromTopTrackList from './tracklist.selectors';

describe('Tracklist Selectors', () => {
  it('should return top tracks loader', () => {
    expect(fromTopTrackList.topTrackListLoader.projector(false)).toBeFalsy();
  });

  it('should return top tracks error', () => {
    expect(fromTopTrackList.topTrackListError.projector(true)).toBeTruthy();
  })

  it('should return top tracks for artist data to be defined', () => {
    const topTracks = ['test']
    expect(fromTopTrackList.topTrackListList.projector(topTracks)).toBeGreaterThan(0);
  })
});
