import { Action, createReducer, on } from '@ngrx/store';
import * as fromArtistActions from '../actions/artist.actions';


export const artistFeatureKey = 'artist';

export interface ArtistState {
  artist: any;
  loading: boolean;
  error: boolean;
}

export const initialState: ArtistState = {
  artist: {},
  loading: false,
  error: false,
};


const artistReducer = createReducer(
  initialState,
  on(fromArtistActions.loadArtists, state => ({
    ...state,
    artist: {},
    loading: true,
    error: false
  })),
  on(fromArtistActions.loadArtistsSuccess, (state, { artistInfo }) => ({
    ...state,
    loading: false,
    artist: artistInfo,
    error: false
  })),
  on(fromArtistActions.loadArtistsFailure, state => ({
    ...state,
    artist: {},
    loading: false,
    error: true
  }))
);

export function reducer(state: ArtistState | undefined, action: Action) {
  return artistReducer(state, action);
}
