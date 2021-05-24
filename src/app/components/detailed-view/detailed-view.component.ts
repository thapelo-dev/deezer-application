import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {

  artistId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.params.id
  }

}
