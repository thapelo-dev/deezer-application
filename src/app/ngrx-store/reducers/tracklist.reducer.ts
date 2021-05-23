import { Action, createReducer, on } from '@ngrx/store';
import * as fromTracklistActions from '../actions/tracklist.actions';

export const tracklistFeatureKey = 'tracklist';

export interface TopTrackListState {
  topTracks: [];
  loading: boolean;
  error: boolean;
}

export const initialState: TopTrackListState = {
  topTracks: [],
  loading: false,
  error: false
};


export const topTracksreducer = createReducer(
  initialState,
  on(fromTracklistActions.loadTracklists, state => ({
    ...state,
    topTracks: [],
    loading: true,
    error: false
  })),
  on(fromTracklistActions.loadTracklistsSuccess, (state, { topTracksResults }) => ({
    ...state,
    loading: false,
    topTracks: topTracksResults.data,
    error: false
  })),
  on(fromTracklistActions.loadTracklistsFailure, state => ({
    ...state,
    topTracks: [],
    loading: false,
    error: true
  }))
);

export function reducer(state: TopTrackListState | undefined, action: Action) {
  return topTracksreducer(state, action);
}
