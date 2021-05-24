import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadSearchArtists } from 'src/app/ngrx-store/actions/search-artist.actions';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedArtist: any;
  isHomeCmp = true;
  faSearch = faSearch;
  constructor(
    private store: Store<DeezerState>,
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('artist')) {
          this.isHomeCmp = false;
        } else {
          this.isHomeCmp = true;
        }
      }
    });
  }

  ngOnInit(): void {

  }

  onSearch(searchTerm) {
    if (searchTerm !== '') {
      this.store.dispatch(loadSearchArtists({ searchTerm }));
      if (!this.isHomeCmp) {
        this.router.navigate(['/'])
      }
    }
  }

  handleGoHome() {
    this.router.navigate(['/'])
  }
}
