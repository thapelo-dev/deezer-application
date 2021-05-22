import { Action, createReducer, on } from '@ngrx/store';
import * as fromSearchArtistActions from '../actions/search-artist.actions';

export const searchArtistFeatureKey = 'searchArtist';

export interface SearchArtistsState {
  artists: [];
  loading: boolean;
  error: boolean;
}

export const initialState: SearchArtistsState = {
  artists: [],
  loading: false,
  error: false,
};


export const searchArtistReducer = createReducer(
  initialState,
  on(fromSearchArtistActions.loadSearchArtists, state => ({
    ...state,
    artists: [],
    loading: true,
    error: false
  })),
  on(fromSearchArtistActions.loadSearchArtistsSuccess, (state, { searchResults }) => ({
    ...state,
    loading: false,
    artists: searchResults.data.map((search: any) => (search.artist)),
    error: false
  })),
  on(fromSearchArtistActions.loadSearchArtistsFailure, state => ({
    ...state,
    artists: [],
    loading: false,
    error: true
  }))
);

export function reducer(state: SearchArtistsState | undefined, action: Action) {
  return searchArtistReducer(state, action);
}
