import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { CompassComponent } from '../compass/compass.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})

export class PlaceComponent implements OnInit {
  @ViewChild(CompassComponent) compass: CompassComponent;

  locations = [
    {
      loc: [-34.812006, 138.491293],
      name: 'Breakfast',
      bg: '#A316BD'
    },
    {
      loc: [],
      name: 'Cherry Picking',
      bg: '#BC1B32'
    },
    {
      loc: [],
      name: 'Picnic',
      bg: '#0FD85D'
    },
    {
      loc: [],
      name: 'Bowling',
      bg: '#FF4B32'
    }
  ];
  currentLocationIndex = 0;
  currentLocation = this.locations[this.currentLocationIndex];

  constructor() { }

  ngOnInit() { }

  nextLocation() {
    this.currentLocationIndex++;
    this.currentLocation = this.locations[this.currentLocationIndex];
  }

}
