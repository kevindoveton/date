import { Component, OnInit, ViewChild } from '@angular/core';
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
      loc: [-35.021062, 138.622906], // actual
      // loc: [-34.796632, 138.490241], // test
      name: 'Breakfast',
      bg: '#A316BD'
    },
    {
      loc: [-34.935054, 138.738184],
      name: 'Cherry Picking',
      bg: '#BC1B32'
    },
    {
      loc: [-34.975465, 138.710323],
      name: 'Picnic',
      bg: '#0FD85D'
    },
    {
      loc: [-35.017309, 138.514237],
      name: 'Beach',
      bg: '#00bcd4'
    },
    {
      loc: [-34.966802, 138.591332],
      name: 'Bowling',
      bg: '#FF4B32'
    }
  ];
  currentLocationIndex = 0;
  currentLocation = this.locations[this.currentLocationIndex];
  currentLocationReached = false;
  showPyro = false;
  fadeToBlack = false;

  constructor() {

   }

  ngOnInit() {
    this.currentLocationIndex = parseInt(localStorage.getItem('position'), 10);
    this.currentLocation = this.locations[this.currentLocationIndex];
    if (this.currentLocationIndex >= this.locations.length) {
      localStorage.removeItem('position');
    }
  }

  nextLocation() {
    this.compass.reset();
    this.currentLocationReached = false;
    this.currentLocationIndex++;
    this.currentLocation = this.locations[this.currentLocationIndex];
    this.showPyro = false;
    localStorage.setItem('position', this.currentLocationIndex.toString(10));
    if (this.currentLocationIndex >= this.locations.length) {
      this.showPyro = true;
      this.fadeToBlack = true;
      localStorage.removeItem('position');
    }
  }

  reachedTarget(event) {
    this.currentLocationReached = true;
    this.showPyro = true;
    setTimeout(() => {
      this.showPyro = false;
    }, 7000);
  }

}
