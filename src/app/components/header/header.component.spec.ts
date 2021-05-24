import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loadSearchArtists } from 'src/app/ngrx-store/actions/search-artist.actions';
import { DeezerState } from 'src/app/ngrx-store/reducers';
import { DetailedViewComponent } from '../detailed-view/detailed-view.component';
import { HomeComponent } from '../home/home.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<DeezerState>;
  let router: Router;

  beforeEach(async () => {
    const initialState = {}
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {
              path: 'artist/:id',
              component: DetailedViewComponent,
            },
            { path: '**', component: HomeComponent }
          ]
        )
      ],
      providers: [
        provideMockStore({ initialState })
      ],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.get(Store);
    router = TestBed.get(Router);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch search with search term', () => {
    const searchTerm = 'eminem'
    component.isHomeCmp = true;
    component.onSearch(searchTerm);
    const action = loadSearchArtists({ searchTerm });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should move to home page and dispatch search with search term', () => {
    const searchTerm = 'eminem'
    component.isHomeCmp = false;
    const navigateSpy = spyOn(router, 'navigate');

    component.onSearch(searchTerm);
    const action = loadSearchArtists({ searchTerm });
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

});
