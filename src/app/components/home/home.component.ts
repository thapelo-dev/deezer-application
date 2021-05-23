import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { searchArtistsLoader, searchArtistsList } from 'src/app/ngrx-store/selectors/search-artist.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading$: Observable<boolean> = this.store.select(searchArtistsLoader);
  artists$: Observable<[]> = this.store.select(searchArtistsList);

  constructor(private store: Store<DeezerState>) { }

  ngOnInit(): void {

  }

}
