import { createAction, props } from '@ngrx/store';

export const loadAlbums = createAction(
  '[Album] Load Albums',
  props<{ id: any }>()
);

export const loadAlbumsSuccess = createAction(
  '[Album] Load Albums Success',
  props<{ artistAlbumResults: any }>()
);

export const loadAlbumsFailure = createAction(
  '[Album] Load Albums Failure',
  props<{ error: any }>()
);
