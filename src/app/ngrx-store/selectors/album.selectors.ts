import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeezerState } from '../reducers';
import { albumFeatureKey } from '../reducers/album.reducer';

export interface ArtistAlbumState {
  artistAlbums: [];
  loading: boolean;
  error: boolean;
}

export const artistAlbumsFeature = createFeatureSelector<DeezerState, ArtistAlbumState>(albumFeatureKey);

export const artistAlbumLoader = createSelector(
  artistAlbumsFeature,
  (state: ArtistAlbumState) => state.loading
);

export const artistAlbumError = createSelector(
  artistAlbumsFeature,
  (state: ArtistAlbumState) => state.error
);

export const artistAlbumList = createSelector(
  artistAlbumsFeature,
  (state: ArtistAlbumState) => state.artistAlbums
);
