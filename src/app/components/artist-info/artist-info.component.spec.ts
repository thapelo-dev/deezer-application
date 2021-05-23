import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { NumberFormatPipe } from 'src/app/pipes/number-format.pipe';

import { ArtistInfoComponent } from './artist-info.component';

describe('ArtistInfoComponent', () => {
  let component: ArtistInfoComponent;
  let fixture: ComponentFixture<ArtistInfoComponent>;
  let store: MockStore<DeezerState>;

  beforeEach(async () => {
    const initialState = {
      artist: {
        artist: {},
        loading: false,
        error: false
      }
    }
    await TestBed.configureTestingModule({
      imports: [NumberFormatPipe],
      declarations: [ArtistInfoComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'select').and.callThrough();
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(ArtistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
