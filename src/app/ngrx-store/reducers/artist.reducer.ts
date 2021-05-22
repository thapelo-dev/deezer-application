import { Action, createReducer, on } from '@ngrx/store';
import * as fromArtistActions from '../actions/artist.actions';


export const artistFeatureKey = 'artist';

export interface ArtistState {
  artists: [];
  loading: boolean;
  error: boolean;
}

export const initialState: ArtistState = {
  artists: [],
  loading: false,
  error: false,
};


export const artistReducer = createReducer(
  initialState,
  on(fromArtistActions.loadArtists, state => ({
    ...state,
    artists: [],
    loading: true,
    error: false
  })),
  on(fromArtistActions.loadArtistsSuccess, (state, { searchResults }) => ({
    ...state,
    loading: false,
    artists: searchResults.data.map((search: any) => (search.artist)),
    error: false
  })),
  on(fromArtistActions.loadArtistsFailure, state => ({
    ...state,
    artists: [],
    loading: false,
    error: true
  })),
);

export function reducer(state: ArtistState | undefined, action: Action) {
  return artistReducer(state, action);
}
