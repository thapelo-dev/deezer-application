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


export interface DeezerState {

  [fromArtist.artistFeatureKey]: fromArtist.ArtistState;
  [fromTracklist.tracklistFeatureKey]: fromTracklist.TopTrackListState;
  [fromAlbum.albumFeatureKey]: fromAlbum.ArtistAlbumState;
  [fromSearchArtist.searchArtistFeatureKey]: fromSearchArtist.SearchArtistsState;
}

export const reducers: ActionReducerMap<DeezerState> = {

  [fromArtist.artistFeatureKey]: fromArtist.reducer,
  [fromTracklist.tracklistFeatureKey]: fromTracklist.reducer,
  [fromAlbum.albumFeatureKey]: fromAlbum.reducer,
  [fromSearchArtist.searchArtistFeatureKey]: fromSearchArtist.reducer,
};


export const metaReducers: MetaReducer<DeezerState>[] = !environment.production ? [] : [];
