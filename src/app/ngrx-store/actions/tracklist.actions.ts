import { createAction, props } from '@ngrx/store';

export const loadTracklists = createAction(
  '[Tracklist] Load Tracklists'
);

export const loadTracklistsSuccess = createAction(
  '[Tracklist] Load Tracklists Success',
  props<{ data: any }>()
);

export const loadTracklistsFailure = createAction(
  '[Tracklist] Load Tracklists Failure',
  props<{ error: any }>()
);
