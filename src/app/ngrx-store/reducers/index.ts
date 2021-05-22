import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromArtist from './artist.reducer';
import * as fromTracklist from './tracklist.reducer';
import * as fromAlbum from './album.reducer';
import * as fromSearchArtist from './search-artist.reducer';


export interface ArtistState {

  [fromArtist.artistFeatureKey]: fromArtist.ArtistState;
  [fromTracklist.tracklistFeatureKey]: fromTracklist.State;
  [fromAlbum.albumFeatureKey]: fromAlbum.State;
  [fromSearchArtist.searchArtistFeatureKey]: fromSearchArtist.SearchArtistsState;
}

export const reducers: ActionReducerMap<ArtistState> = {

  [fromArtist.artistFeatureKey]: fromArtist.reducer,
  [fromTracklist.tracklistFeatureKey]: fromTracklist.reducer,
  [fromAlbum.albumFeatureKey]: fromAlbum.reducer,
  [fromSearchArtist.searchArtistFeatureKey]: fromSearchArtist.reducer,
};


export const metaReducers: MetaReducer<ArtistState>[] = !environment.production ? [] : [];
