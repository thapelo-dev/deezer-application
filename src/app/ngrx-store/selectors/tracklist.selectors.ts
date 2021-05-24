import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeezerState } from '../reducers';
import { tracklistFeatureKey } from '../reducers/tracklist.reducer';

export interface TopTrackListState {
  topTracks: any[];
  loading: boolean;
  error: boolean;
}

export const selectTopTracklistFeature = createFeatureSelector<DeezerState, TopTrackListState>(tracklistFeatureKey);

export const topTrackListLoader = createSelector(
  selectTopTracklistFeature,
  (state: TopTrackListState) => state.loading
);

export const topTrackListError = createSelector(
  selectTopTracklistFeature,
  (state: TopTrackListState) => state.error
);

export const topTrackListList = createSelector(
  selectTopTracklistFeature,
  (state: TopTrackListState) => state.topTracks
);
