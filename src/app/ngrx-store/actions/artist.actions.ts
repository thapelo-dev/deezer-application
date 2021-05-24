import { createAction, props } from '@ngrx/store';

export const loadArtists = createAction(
  '[Artist] Load Artists',
  props<{ id: any }>()
);

export const loadArtistsSuccess = createAction(
  '[Artist] Load Artists Success',
  props<{ artistInfo: any }>()
);

export const loadArtistsFailure = createAction(
  '[Artist] Load Artists Failure',
  props<{ error: any }>()
);
