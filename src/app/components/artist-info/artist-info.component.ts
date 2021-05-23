import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadArtists } from 'src/app/ngrx-store/actions/artist.actions';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { artistData, artistLoader } from 'src/app/ngrx-store/selectors/artist.selectors';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {
  @Input() artistId;
  loading$: Observable<boolean> = this.store.select(artistLoader);
  artistInfo$: Observable<{}> = this.store.select(artistData);

  constructor(private store: Store<DeezerState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadArtists({ id: this.artistId }));
  }

}
