import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})

export class CompassComponent implements OnInit {
  @Input() targetLocation: Number[];
  @Output() reachedTarget = new EventEmitter();

  showCompassNoSupport = true;
  currentHeading = 0;
  compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
  compassWatch = undefined;
  gpsWatch = undefined;
  distanceToTarget = 4.0;
  directionToTarget = 'rotate(0deg)';
  emittedTargetReached = false;

  constructor() { }


  ngOnInit() {
    Compass.noSupport(() => {
      this.showCompassNoSupport = true;
    });

    Compass.init((method) => {
      this.showCompassNoSupport = false;
    });

    this.compassWatch = Compass.watch((heading) => {
      this.currentHeading = heading;
      this.updateCompassDirection();
    });

    this.gpsWatch = navigator.geolocation.watchPosition((position) => {
      const pos = [position.coords.latitude, position.coords.longitude];
      this.updateDistanceToTarget(pos, this.targetLocation);
    });
  }

  reset() {
    this.directionToTarget = 'rotate(0deg)';
    this.distanceToTarget = 0;
    this.emittedTargetReached = false;
  }

  updateCompassDirection() {
    this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
  }

  updateDistanceToTarget(cur, target) {
    this.distanceToTarget = this.getDistanceFromLatLonInKm(cur[0], cur[1], target[0], target[1]);
    this.directionToTarget = 'rotate(' + this.getDirection(cur[0], cur[1], target[0], target[1]) + 'deg)';
    this.updateCompassDirection();

    if (!this.emittedTargetReached && this.distanceToTarget < 0.2) {
        this.reachedTarget.emit(this.distanceToTarget);
        this.emittedTargetReached = true;
    }
    return;
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = this.degToRad(lat2 - lat1);  // deg2rad below
  const dLon = this.degToRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  getDirection(startLat, startLong, endLat, endLong) {
    startLat = this.degToRad(startLat);
    startLong = this.degToRad(startLong);
    endLat = this.degToRad(endLat);
    endLong = this.degToRad(endLong);

    let dLong = endLong - startLong;

    const dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) / Math.tan(startLat / 2.0 + Math.PI / 4.0));
    if (Math.abs(dLong) > Math.PI) {
      if (dLong > 0.0) {
        dLong = -(2.0 * Math.PI - dLong);
      } else {
        dLong = (2.0 * Math.PI + dLong);
      }
    }

    return (this.radToDeg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
  }

  radToDeg(rad) {
    return rad * (180 / Math.PI);
  }

}
