import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromArtist from './artist.reducer';


export interface ArtistState {

  [fromArtist.artistFeatureKey]: fromArtist.ArtistState;
}

export const reducers: ActionReducerMap<ArtistState> = {

  [fromArtist.artistFeatureKey]: fromArtist.reducer,
};


export const metaReducers: MetaReducer<ArtistState>[] = !environment.production ? [] : [];
