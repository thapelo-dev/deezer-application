import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@material-ui/icons';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DeezerState } from 'src/app/ngrx-store/reducers';

import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let store: MockStore<DeezerState>;

  beforeEach(async () => {
    const initialState = {
      album: {
        artistAlbums: [],
        loading: false,
        error: false
      }
    }
    await TestBed.configureTestingModule({
      declarations: [AlbumComponent],
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
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
