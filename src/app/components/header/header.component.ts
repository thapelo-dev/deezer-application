import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadArtists } from 'src/app/ngrx-store/actions/artist.actions';
import { artistList, artistLoader } from 'src/app/ngrx-store/selectors/artist.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedArtist: any;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  // artistsList$ = this.store.select(artistList);
  // artistLoading$ = this.store.select(artistLoader)
  // artistError$ = this.store.select(artistError)

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  onSearch(event: any) {
    if (event.term !== '') {
      console.log(event.term)
      this.store.dispatch(loadArtists({ searchTerm: event.term }));
    }
  }

  onChange(event: any) {

  }
}
