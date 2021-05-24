import { SearchArtistsState } from '../reducers/search-artist.reducer';
import * as fromSearchArtist from './search-artist.selectors';


describe("SearchArtist Selectors", () => {
  const initialState: SearchArtistsState = {
    artists: [{ id: 22, title: 'don' }, { id: 12, title: 'josh' }],
    loading: false,
    error: false,
  };

  it("should select the search artist loader", () => {
    const result = fromSearchArtist.searchArtistsLoader.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the search artist error", () => {
    const result = fromSearchArtist.searchArtistsError.projector(initialState);
    expect(result).toBeFalse();
  });

  it("should select the search artist data", () => {
    const result = fromSearchArtist.searchArtistsList.projector(initialState);

    expect(result.length).toEqual(2);
    expect(result[1].id).toEqual(12);
    expect(result[0].title).toEqual('don');
  });
});
