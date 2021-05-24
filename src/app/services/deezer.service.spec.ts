import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { DeezerService } from './deezer.service';
import { environment } from 'src/environments/environment';

describe('DeezerService', () => {
  let service: DeezerService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DeezerService,
      ]
    });
    service = TestBed.inject(DeezerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET with query params: getArtistInfo', () => {
    const mockUrl = `${baseUrl}/artist/12/album?limit=12`;
    const params = {
      limit: 12,
    }

    service.getArtistInfo(12, params, 'album').subscribe();

    const mockReq = httpMock.expectOne(mockUrl);
    expect(mockReq.request.method).toEqual('GET');
    httpMock.verify();
  })

  it('should GET with query params: searchDeezer', () => {
    const mockUrl = `${baseUrl}search?q=artist:eminem`;

    service.searchDeezer('eminem').subscribe();

    const mockReq = httpMock.expectOne(mockUrl);
    expect(mockReq.request.method).toEqual('GET');
    httpMock.verify();
  })
});
