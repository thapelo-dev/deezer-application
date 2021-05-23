import { Action, createReducer, on } from '@ngrx/store';
import * as fromArtistAlbumsActions from '../actions/album.actions';


export const albumFeatureKey = 'album';

export interface ArtistAlbumState {
  artistAlbums: [];
  loading: boolean;
  error: boolean;
}

export const initialState: ArtistAlbumState = {
  artistAlbums: [],
  loading: false,
  error: false,
};


export const artistAlbumsReducer = createReducer(
  initialState,
  on(fromArtistAlbumsActions.loadAlbums, state => ({
    ...state,
    artistAlbums: [],
    loading: true,
    error: false
  })),
  on(fromArtistAlbumsActions.loadAlbumsSuccess, (state, { artistAlbumResults }) => ({
    ...state,
    loading: false,
    artistAlbums: artistAlbumResults.data,
    error: false
  })),
  on(fromArtistAlbumsActions.loadAlbumsFailure, state => ({
    ...state,
    artistAlbums: [],
    loading: false,
    error: true
  }))
);

export function reducer(state: ArtistAlbumState | undefined, action: Action) {
  return artistAlbumsReducer(state, action);
}

