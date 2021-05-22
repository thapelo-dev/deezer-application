import { createFeatureSelector, createSelector } from '@ngrx/store';
import { artistFeatureKey } from '../reducers/artist.reducer';

export interface ArtistState {
  artists: [];
  loading: boolean;
  error: boolean;
}

export interface State {
  artist: ArtistState
}

export const selectArtistFeature = (state: State) => state.artist;

export const artistLoader = createSelector(
  selectArtistFeature,
  (state: ArtistState) => state.loading
);

export const artistError = createSelector(
  selectArtistFeature,
  (state: ArtistState) => state.error
);

export const artistList = createSelector(
  selectArtistFeature,
  (state: ArtistState) => state.artists
);
