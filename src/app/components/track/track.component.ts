import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadArtists } from 'src/app/ngrx-store/actions/artist.actions';
import { loadTracklists } from 'src/app/ngrx-store/actions/tracklist.actions';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { topTrackListList, topTrackListLoader } from 'src/app/ngrx-store/selectors/tracklist.selectors';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() artistId;

  loading$: Observable<boolean> = this.store.select(topTrackListLoader);
  tracklist$: Observable<[]> = this.store.select(topTrackListList);

  constructor(private store: Store<DeezerState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadTracklists({ id: this.artistId, params: { limit: 10 } }));
  }

}
