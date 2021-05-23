import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSearchArtists } from 'src/app/ngrx-store/actions/search-artist.actions';
import { DeezerState } from 'src/app/ngrx-store/reducers';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedArtist: any;
  constructor(private store: Store<DeezerState>) { }

  ngOnInit(): void {

  }

  onSearch(searchTerm) {
    if (searchTerm !== '') {
      this.store.dispatch(loadSearchArtists({ searchTerm }));
    }
  }

  onChange(event: any) {
    console.log(event)
  }
}
