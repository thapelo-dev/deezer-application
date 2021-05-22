import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadArtists } from 'src/app/ngrx-store/actions/artist.actions';
import { artistError, artistList, artistLoader } from 'src/app/ngrx-store/selectors/artist.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedArtist: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSearch(searchTerm) {
    if (searchTerm !== '') {
      this.store.dispatch(loadArtists({ searchTerm }));
    }
  }

  onChange(event: any) {
    console.log(event)
  }
}
