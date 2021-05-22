import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  artists = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.subscribe((data: any) => {
      this.artists = data.artist.artists;
      this.loading = data.artist.loading;
    })
  }

}
