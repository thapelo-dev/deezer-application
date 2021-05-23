import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TrackComponent } from './track.component';

describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;
  let store: MockStore<DeezerState>;

  beforeEach(async () => {
    const initialState = {
      tracklist: {
        topTracks: [],
        loading: false,
        error: false
      }
    }
    await TestBed.configureTestingModule({
      declarations: [TrackComponent],
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
    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
