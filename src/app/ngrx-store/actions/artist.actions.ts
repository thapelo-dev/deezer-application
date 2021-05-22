import { createAction, props } from '@ngrx/store';

export const loadArtists = createAction(
  '[Artist] Load Artists',
  props<{ searchTerm: string }>()
);

export const loadArtistsSuccess = createAction(
  '[Artist] Load Artists Success',
  props<{ searchResults: any }>()
);

export const loadArtistsFailure = createAction(
  '[Artist] Load Artists Failure',
  props<{ error: any }>()
);
