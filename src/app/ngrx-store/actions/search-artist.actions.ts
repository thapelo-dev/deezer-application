import { createAction, props } from '@ngrx/store';

export const loadSearchArtists = createAction(
  '[SearchArtist] Load SearchArtists',
  props<{ searchTerm: string }>()
);

export const loadSearchArtistsSuccess = createAction(
  '[SearchArtist] Load SearchArtists Success',
  props<{ searchResults: any }>()
);

export const loadSearchArtistsFailure = createAction(
  '[SearchArtist] Load SearchArtists Failure',
  props<{ error: any }>()
);
