import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})

export class CompassComponent implements OnInit {
  @Input() targetLocation: Number[];

  showCompassNoSupport = true;
  currentHeading = 0;
  compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
  compassWatch = undefined;
  gpsWatch = undefined;
  distanceToTarget = 4.0;

  constructor() { }

  ngOnInit() {
    Compass.noSupport(() => {
      this.showCompassNoSupport = true;
    });

    Compass.init((method) => {
      this.showCompassNoSupport = false;
    });

    this.compassWatch = Compass.watch((heading) => {
      // this.currentHeading = heading;
      // this.updateCompassDirection();
    });

    this.gpsWatch = navigator.geolocation.watchPosition((position) => {
      const pos = [position.coords.latitude, position.coords.longitude];
      this.updateDistanceToTarget(pos, this.targetLocation);
    });

  }

  updateCompassDirection() {
    this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
  }

  updateDistanceToTarget(cur, target) {
    this.distanceToTarget = this.getDistanceFromLatLonInKm(cur[0], cur[1], target[0], target[1]);
    this.currentHeading = this.getDirection(cur[0], cur[1], target[0], target[1]);
    this.updateCompassDirection();
    return;
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = this.deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  getDirection(lat1, lng1, lat2, lng2) {
    const PI = Math.PI;
    const dTeta = Math.log(Math.tan((lat2 / 2) + (PI / 4)) / Math.tan((lat1 / 2) + (PI / 4)));
    const dLon = Math.abs(lng1 - lng2);
    const teta = Math.atan2(dLon, dTeta);
    const direction = Math.round(this.radToDeg(teta));
    return direction;
  }

  radToDeg(rad) {
    return rad * (180 / Math.PI);
  }

}
