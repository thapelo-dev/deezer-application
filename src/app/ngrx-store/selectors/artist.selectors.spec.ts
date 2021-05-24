import { ArtistState } from "../reducers/artist.reducer";
import * as fromArtistSelectors from "./artist.selectors";


describe("Artist Selectors", () => {
  const initialState: ArtistState = {
    artist: { id: 2, name: 'eminem' },
    loading: false,
    error: false,
  };

  it("should select the artist loader", () => {
    const result = fromArtistSelectors.artistLoader.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the artist error", () => {
    const result = fromArtistSelectors.artistError.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the artist data", () => {
    const result = fromArtistSelectors.artistData.projector(initialState);

    expect(result.id).toEqual(2);
    expect(result.name).toEqual('eminem');
  });
});
