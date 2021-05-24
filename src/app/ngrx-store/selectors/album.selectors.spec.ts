import { ArtistAlbumState } from "../reducers/album.reducer";
import * as fromAlbumSelectors from "./album.selectors";


describe("Album Selectors", () => {
  const initialState = {
    artistAlbums: [{ id: 2, title: 'boom' }],
    loading: true,
    error: false,
  };

  it("should select the album loader", () => {
    const result = fromAlbumSelectors.artistAlbumLoader.projector(initialState);
    expect(result).toBeTrue();
  });

  it("should select the album error", () => {
    const result = fromAlbumSelectors.artistAlbumError.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the album collection", () => {
    const result = fromAlbumSelectors.artistAlbumList.projector(initialState);

    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(2);
    expect(result[0].title).toEqual('boom');
  });
});
