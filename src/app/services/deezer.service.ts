import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  private rootUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  searchDeezer(searchTerm: any) {
    return this.http.get<any>(`${this.rootUrl}search?q=artist:${searchTerm}`)
  }

  getArtist(params: any) {
    return this.http.get<any>(`${this.rootUrl}${params}`)
  }

}
