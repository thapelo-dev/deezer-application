import { TopTrackListState } from '../reducers/tracklist.reducer';
import * as fromTopTrackList from './tracklist.selectors';

describe("Tracklist Selectors", () => {
  const initialState: TopTrackListState = {
    topTracks: [{ id: 22, title: 'the ball' }],
    loading: false,
    error: false,
  };

  it("should select the top tracks loader", () => {
    const result = fromTopTrackList.topTrackListLoader.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the top tracks error", () => {
    const result = fromTopTrackList.topTrackListError.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the top tracks data", () => {
    const result = fromTopTrackList.topTrackListList.projector(initialState);

    expect(result[0].id).toEqual(22);
    expect(result[0].title).toEqual('the ball');
  });
});
