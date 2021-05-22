import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SearchArtistEffects } from './search-artist.effects';

describe('SearchArtistEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchArtistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchArtistEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SearchArtistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
