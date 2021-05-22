import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TracklistEffects } from './tracklist.effects';

describe('TracklistEffects', () => {
  let actions$: Observable<any>;
  let effects: TracklistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TracklistEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TracklistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
