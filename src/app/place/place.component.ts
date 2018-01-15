import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  locations = [
    {
      loc: [-34.7960508, 138.4884457],
      name: 'Home'
    },
    {
      loc: [],
      name: ''
    }
  ];
  placeName = 'placeName';

  constructor() { }

  ngOnInit() { }
}
