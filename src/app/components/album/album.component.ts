import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAlbums } from 'src/app/ngrx-store/actions/album.actions';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { artistAlbumList, artistAlbumLoader } from 'src/app/ngrx-store/selectors/album.selectors';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() artistId;
  loading$: Observable<boolean> = this.store.select(artistAlbumLoader);
  artistAlbums$: Observable<any[]> = this.store.select(artistAlbumList);

  constructor(private store: Store<DeezerState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAlbums({ id: this.artistId }));
  }

}
