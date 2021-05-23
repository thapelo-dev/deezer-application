import { createAction, props } from '@ngrx/store';

export const loadTracklists = createAction(
  '[Tracklist] Load Tracklists',
  props<{ id: any, params: any }>()
);

export const loadTracklistsSuccess = createAction(
  '[Tracklist] Load Tracklists Success',
  props<{ topTracksResults: any }>()
);

export const loadTracklistsFailure = createAction(
  '[Tracklist] Load Tracklists Failure',
  props<{ error: any }>()
);
