import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchArtistFeatureKey } from '../reducers/search-artist.reducer';
import { DeezerState } from '../reducers';

export interface SearchArtistsState {
  artists: any[];
  loading: boolean;
  error: boolean;
}

export const selectSearchArtistFeature = createFeatureSelector<DeezerState, SearchArtistsState>(searchArtistFeatureKey);

export const searchArtistsLoader = createSelector(
  selectSearchArtistFeature,
  (state: SearchArtistsState) => state.loading
);

export const searchArtistsError = createSelector(
  selectSearchArtistFeature,
  (state: SearchArtistsState) => state.error
);

export const searchArtistsList = createSelector(
  selectSearchArtistFeature,
  (state: SearchArtistsState) => state.artists
);
