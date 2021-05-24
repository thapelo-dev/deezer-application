import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeezerState } from '../reducers';
import { artistFeatureKey } from '../reducers/artist.reducer';

export interface ArtistState {
  artist: any;
  loading: boolean;
  error: boolean;
}

export const selectArtistFeature = createFeatureSelector<DeezerState, ArtistState>(artistFeatureKey);

export const artistLoader = createSelector(
  selectArtistFeature,
  (state: ArtistState) => state.loading
);

export const artistError = createSelector(
  selectArtistFeature,
  (state: ArtistState) => state.error
);

export const artistData = createSelector(
  selectArtistFeature,
  (state: ArtistState) => state.artist
);
