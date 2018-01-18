webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Amelia // Kevin // Adventure';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// import { RoutesRoutingModule } from './routes/routes-routing.module';
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var start_page_component_1 = __webpack_require__("../../../../../src/app/start-page/start-page.component.ts");
var compass_component_1 = __webpack_require__("../../../../../src/app/compass/compass.component.ts");
var breakfast_component_1 = __webpack_require__("../../../../../src/app/breakfast/breakfast.component.ts");
var picking_component_1 = __webpack_require__("../../../../../src/app/picking/picking.component.ts");
var place_component_1 = __webpack_require__("../../../../../src/app/place/place.component.ts");
var pyro_component_1 = __webpack_require__("../../../../../src/app/pyro/pyro.component.ts");
var routes = [
    { path: '', component: start_page_component_1.StartPageComponent },
    { path: 'place', component: place_component_1.PlaceComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                start_page_component_1.StartPageComponent,
                compass_component_1.CompassComponent,
                breakfast_component_1.BreakfastComponent,
                picking_component_1.PickingComponent,
                place_component_1.PlaceComponent,
                pyro_component_1.PyroComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/breakfast/breakfast.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  breakfast works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/breakfast/breakfast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/breakfast/breakfast.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BreakfastComponent = (function () {
    function BreakfastComponent() {
    }
    BreakfastComponent.prototype.ngOnInit = function () {
    };
    BreakfastComponent = __decorate([
        core_1.Component({
            selector: 'app-breakfast',
            template: __webpack_require__("../../../../../src/app/breakfast/breakfast.component.html"),
            styles: [__webpack_require__("../../../../../src/app/breakfast/breakfast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreakfastComponent);
    return BreakfastComponent;
}());
exports.BreakfastComponent = BreakfastComponent;


/***/ }),

/***/ "../../../../../src/app/compass/compass.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"showCompassNoSupport == true\">no support for compass</p>\n\n<div class=\"compass\" *ngIf=\"showCompassNoSupport == false\">\n  <p class=\"black center\">{{distanceToTarget | number: '1.2-2'}}km</p>\n  <div class=\"compass--circle\">\n    <div class=\"compass--rotate\" [style.transform]=\"compassRotation\">\n      <div class=\"compass--rotate\" [style.transform]=\"directionToTarget\">\n        <span class=\"compass--target\"></span>\n      </div>\n    </div>\n    <span class=\"compass--zero\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/compass/compass.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".compass {\n  position: relative; }\n  .compass .center {\n    width: 100%;\n    text-align: center; }\n  .compass .compass--circle {\n    background: #ffffff;\n    border-radius: 50%;\n    width: 200px;\n    height: 200px;\n    position: relative;\n    box-shadow: 4px 4px 25px black; }\n    .compass .compass--circle .compass--rotate {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      z-index: 1; }\n    .compass .compass--circle .compass--zero {\n      height: 100px;\n      width: 4px;\n      background: red;\n      position: absolute;\n      top: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      z-index: 2;\n      border-bottom-left-radius: 2px;\n      border-bottom-right-radius: 2px; }\n  .compass .compass--target {\n    height: 100px;\n    width: 6px;\n    background: green;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    z-index: 1;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compass/compass.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CompassComponent = (function () {
    function CompassComponent() {
        this.reachedTarget = new core_1.EventEmitter();
        this.showCompassNoSupport = true;
        this.currentHeading = 0;
        this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
        this.compassWatch = undefined;
        this.gpsWatch = undefined;
        this.distanceToTarget = 4.0;
        this.directionToTarget = 'rotate(0deg)';
        this.emittedTargetReached = false;
    }
    CompassComponent.prototype.ngOnInit = function () {
        var _this = this;
        Compass.noSupport(function () {
            _this.showCompassNoSupport = true;
        });
        Compass.init(function (method) {
            _this.showCompassNoSupport = false;
        });
        this.compassWatch = Compass.watch(function (heading) {
            _this.currentHeading = heading;
            _this.updateCompassDirection();
        });
        this.gpsWatch = navigator.geolocation.watchPosition(function (position) {
            var pos = [position.coords.latitude, position.coords.longitude];
            _this.updateDistanceToTarget(pos, _this.targetLocation);
        });
    };
    CompassComponent.prototype.reset = function () {
        this.directionToTarget = 'rotate(0deg)';
        this.distanceToTarget = 0;
        this.emittedTargetReached = false;
    };
    CompassComponent.prototype.updateCompassDirection = function () {
        this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
    };
    CompassComponent.prototype.updateDistanceToTarget = function (cur, target) {
        this.distanceToTarget = this.getDistanceFromLatLonInKm(cur[0], cur[1], target[0], target[1]);
        this.directionToTarget = 'rotate(' + this.getDirection(cur[0], cur[1], target[0], target[1]) + 'deg)';
        this.updateCompassDirection();
        if (!this.emittedTargetReached && this.distanceToTarget < 0.2) {
            this.reachedTarget.emit(this.distanceToTarget);
            this.emittedTargetReached = true;
        }
        return;
    };
    CompassComponent.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.degToRad(lat2 - lat1); // deg2rad below
        var dLon = this.degToRad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    CompassComponent.prototype.degToRad = function (deg) {
        return deg * (Math.PI / 180);
    };
    CompassComponent.prototype.getDirection = function (startLat, startLong, endLat, endLong) {
        startLat = this.degToRad(startLat);
        startLong = this.degToRad(startLong);
        endLat = this.degToRad(endLat);
        endLong = this.degToRad(endLong);
        var dLong = endLong - startLong;
        var dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) / Math.tan(startLat / 2.0 + Math.PI / 4.0));
        if (Math.abs(dLong) > Math.PI) {
            if (dLong > 0.0) {
                dLong = -(2.0 * Math.PI - dLong);
            }
            else {
                dLong = (2.0 * Math.PI + dLong);
            }
        }
        return (this.radToDeg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
    };
    CompassComponent.prototype.radToDeg = function (rad) {
        return rad * (180 / Math.PI);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CompassComponent.prototype, "targetLocation", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CompassComponent.prototype, "reachedTarget", void 0);
    CompassComponent = __decorate([
        core_1.Component({
            selector: 'app-compass',
            template: __webpack_require__("../../../../../src/app/compass/compass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/compass/compass.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompassComponent);
    return CompassComponent;
}());
exports.CompassComponent = CompassComponent;


/***/ }),

/***/ "../../../../../src/app/picking/picking.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  picking works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/picking/picking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/picking/picking.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PickingComponent = (function () {
    function PickingComponent() {
    }
    PickingComponent.prototype.ngOnInit = function () {
    };
    PickingComponent = __decorate([
        core_1.Component({
            selector: 'app-picking',
            template: __webpack_require__("../../../../../src/app/picking/picking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/picking/picking.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PickingComponent);
    return PickingComponent;
}());
exports.PickingComponent = PickingComponent;


/***/ }),

/***/ "../../../../../src/app/place/place.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" [style.backgroundColor]=\"currentLocation['bg']\">\n  <div class=\"pyro container\" *ngIf=\"showPyro\">\n    <app-pyro></app-pyro>\n  </div>\n  <h2>{{currentLocation['name']}}</h2>\n  <button (click)=\"nextLocation()\" *ngIf=\"currentLocationReached\">Next</button>\n  <div class=\"compass container\">\n    <app-compass [targetLocation]=\"currentLocation['loc']\" (reachedTarget)=\"reachedTarget($event)\"></app-compass>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/place/place.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".compass.container {\n  position: absolute;\n  bottom: 150px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.pyro.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.app h2 {\n  position: absolute;\n  top: 32px;\n  left: 32px;\n  font-size: 40px;\n  text-transform: uppercase;\n  word-spacing: 375px; }\n\n.app button {\n  position: absolute;\n  bottom: 12px;\n  left: 10%;\n  width: 80%;\n  font-size: 24px;\n  padding: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/place/place.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var compass_component_1 = __webpack_require__("../../../../../src/app/compass/compass.component.ts");
var PlaceComponent = (function () {
    function PlaceComponent() {
        this.locations = [
            {
                // loc: [-35.021062, 138.622906], // actual
                loc: [-34.796632, 138.490241],
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
                bg: 'yellow'
            },
            {
                loc: [-34.966802, 138.591332],
                name: 'Bowling',
                bg: '#FF4B32'
            }
        ];
        this.currentLocationIndex = 0;
        this.currentLocation = this.locations[this.currentLocationIndex];
        this.currentLocationReached = true;
        this.showPyro = false;
    }
    PlaceComponent.prototype.ngOnInit = function () { };
    PlaceComponent.prototype.nextLocation = function () {
        this.compass.reset();
        this.currentLocationReached = false;
        this.currentLocationIndex++;
        this.currentLocation = this.locations[this.currentLocationIndex];
        this.showPyro = false;
    };
    PlaceComponent.prototype.reachedTarget = function (event) {
        var _this = this;
        this.currentLocationReached = true;
        this.showPyro = true;
        setTimeout(function () {
            _this.showPyro = false;
        }, 7000);
    };
    __decorate([
        core_1.ViewChild(compass_component_1.CompassComponent),
        __metadata("design:type", compass_component_1.CompassComponent)
    ], PlaceComponent.prototype, "compass", void 0);
    PlaceComponent = __decorate([
        core_1.Component({
            selector: 'app-place',
            template: __webpack_require__("../../../../../src/app/place/place.component.html"),
            styles: [__webpack_require__("../../../../../src/app/place/place.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaceComponent);
    return PlaceComponent;
}());
exports.PlaceComponent = PlaceComponent;


/***/ }),

/***/ "../../../../../src/app/pyro/pyro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pyro\">\n  <div class=\"before\"></div>\n  <div class=\"after\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pyro/pyro.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pyro > .before, .pyro > .after {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; }\n\n.pyro > .after {\n  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s; }\n\n@-webkit-keyframes bang {\n  to {\n    box-shadow: -13.5px -133.83333333px #ff6f00, 109.5px -202.83333333px #0073ff, 85.5px -116.83333333px #eaff00, 105.5px -133.83333333px #ff007b, 29.5px -297.83333333px #ff6600, 137.5px 52.16666667px #00ffb3, -100.5px -294.83333333px #ffaa00, -40.5px -229.83333333px #ff004d, 41.5px -391.83333333px #8c00ff, 164.5px -343.83333333px #ff00bb, 165.5px -460.83333333px #0037ff, 6.5px -502.83333333px #00fff2, -84.5px -126.83333333px #3700ff, 159.5px 69.16666667px #00ffcc, 184.5px -495.83333333px #fff200, -167.5px -423.83333333px #fff200, -36.5px -22.83333333px #ff00c4, 178.5px -108.83333333px #00ff9d, 164.5px -347.83333333px #00ff22, -13.5px -419.83333333px #0011ff, 122.5px -500.83333333px #f200ff, -62.5px -551.83333333px #00fff2, -100.5px -321.83333333px #ff00bb, -134.5px -291.83333333px #4400ff, 179.5px -550.83333333px #ff5500, 181.5px -210.83333333px #aa00ff, 169.5px 3.16666667px #8c00ff, 74.5px -538.83333333px #000dff, 1.5px -538.83333333px #00aeff, 100.5px -200.83333333px #11ff00, -55.5px -540.83333333px #5100ff, 132.5px -33.83333333px #77ff00, 99.5px -423.83333333px #ff1500, -18.5px -37.83333333px #00eeff, 112.5px -354.83333333px #ff5900, -6.5px -347.83333333px #00ffa2, -152.5px -345.83333333px #ff00bb, -142.5px -364.83333333px #00ff04, 120.5px 44.16666667px #00ff37, -120.5px -381.83333333px cyan, 53.5px 109.16666667px #04ff00, -1.5px -490.83333333px #04ff00, 172.5px -196.83333333px #00ff88, 62.5px -43.83333333px #ff3700, -2.5px -277.83333333px #f200ff, -143.5px -413.83333333px red, -77.5px -212.83333333px #1100ff, -94.5px 74.16666667px #5e00ff, -122.5px -366.83333333px #00ff48, 124.5px -131.83333333px #ff5500, -13.5px -229.83333333px #00ffae; } }\n\n@keyframes bang {\n  to {\n    box-shadow: -13.5px -133.83333333px #ff6f00, 109.5px -202.83333333px #0073ff, 85.5px -116.83333333px #eaff00, 105.5px -133.83333333px #ff007b, 29.5px -297.83333333px #ff6600, 137.5px 52.16666667px #00ffb3, -100.5px -294.83333333px #ffaa00, -40.5px -229.83333333px #ff004d, 41.5px -391.83333333px #8c00ff, 164.5px -343.83333333px #ff00bb, 165.5px -460.83333333px #0037ff, 6.5px -502.83333333px #00fff2, -84.5px -126.83333333px #3700ff, 159.5px 69.16666667px #00ffcc, 184.5px -495.83333333px #fff200, -167.5px -423.83333333px #fff200, -36.5px -22.83333333px #ff00c4, 178.5px -108.83333333px #00ff9d, 164.5px -347.83333333px #00ff22, -13.5px -419.83333333px #0011ff, 122.5px -500.83333333px #f200ff, -62.5px -551.83333333px #00fff2, -100.5px -321.83333333px #ff00bb, -134.5px -291.83333333px #4400ff, 179.5px -550.83333333px #ff5500, 181.5px -210.83333333px #aa00ff, 169.5px 3.16666667px #8c00ff, 74.5px -538.83333333px #000dff, 1.5px -538.83333333px #00aeff, 100.5px -200.83333333px #11ff00, -55.5px -540.83333333px #5100ff, 132.5px -33.83333333px #77ff00, 99.5px -423.83333333px #ff1500, -18.5px -37.83333333px #00eeff, 112.5px -354.83333333px #ff5900, -6.5px -347.83333333px #00ffa2, -152.5px -345.83333333px #ff00bb, -142.5px -364.83333333px #00ff04, 120.5px 44.16666667px #00ff37, -120.5px -381.83333333px cyan, 53.5px 109.16666667px #04ff00, -1.5px -490.83333333px #04ff00, 172.5px -196.83333333px #00ff88, 62.5px -43.83333333px #ff3700, -2.5px -277.83333333px #f200ff, -143.5px -413.83333333px red, -77.5px -212.83333333px #1100ff, -94.5px 74.16666667px #5e00ff, -122.5px -366.83333333px #00ff48, 124.5px -131.83333333px #ff5500, -13.5px -229.83333333px #00ffae; } }\n\n@-webkit-keyframes gravity {\n  to {\n    transform: translate3d(0, 200px, 0);\n    -moz-transform: translate3d(0, 200px, 0);\n    -webkit-transform: translate3d(0, 200px, 0);\n    -o-transform: translate3d(0, 200px, 0);\n    -ms-transform: translate3d(0, 200px, 0);\n    opacity: 0; } }\n\n@keyframes gravity {\n  to {\n    transform: translate3d(0, 200px, 0);\n    -moz-transform: translate3d(0, 200px, 0);\n    -webkit-transform: translate3d(0, 200px, 0);\n    -o-transform: translate3d(0, 200px, 0);\n    -ms-transform: translate3d(0, 200px, 0);\n    opacity: 0; } }\n\n@-webkit-keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%; }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%; }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%; }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%; }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%; } }\n\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%; }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%; }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%; }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%; }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pyro/pyro.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PyroComponent = (function () {
    function PyroComponent() {
    }
    PyroComponent.prototype.ngOnInit = function () {
    };
    PyroComponent = __decorate([
        core_1.Component({
            selector: 'app-pyro',
            template: __webpack_require__("../../../../../src/app/pyro/pyro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pyro/pyro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PyroComponent);
    return PyroComponent;
}());
exports.PyroComponent = PyroComponent;


/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <div class=\"center heading\">\n    <div class=\"heading\">\n      <h1>Arr,</h1>\n      <!-- <h2>Today... we go on a treasure hunt</h2> -->\n    </div>\n    <div class=\"button\">\n      <button routerLink=\"place\">Continue</button>\n    </div>\n  </div>\n  <div class=\"dt\">\n    <h2>8am</h2>\n    <h3>20.01.2018</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\n  background-color: #2B77D6;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  color: white; }\n  .app .center.heading {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 150px;\n    height: 60px; }\n    .app .center.heading .heading {\n      position: absolute;\n      height: 100%;\n      width: 100%; }\n    .app .center.heading .button {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n    .app .center.heading h1 {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      font-size: 50px;\n      font-weight: 100;\n      text-align: center;\n      margin: 0;\n      padding-bottom: 8px;\n      -webkit-animation-name: animateIn;\n              animation-name: animateIn;\n      -webkit-animation-duration: 5s;\n              animation-duration: 5s;\n      -webkit-animation-delay: 1s;\n              animation-delay: 1s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      opacity: 0; }\n    .app .center.heading button {\n      opacity: 0;\n      -webkit-animation-name: fadeIn;\n              animation-name: fadeIn;\n      -webkit-animation-delay: 6s;\n              animation-delay: 6s;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n  .app .dt {\n    display: none;\n    position: absolute;\n    bottom: 20px;\n    left: 20px; }\n    .app .dt h2,\n    .app .dt h3 {\n      margin: 0;\n      font-weight: 100; }\n    .app .dt h2 {\n      font-size: 30px;\n      letter-spacing: 2px; }\n    .app .dt h3 {\n      font-size: 13px; }\n\n@-webkit-keyframes animateIn {\n  0% {\n    top: 100%;\n    opacity: 0; }\n  20% {\n    top: 0;\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes animateIn {\n  0% {\n    top: 100%;\n    opacity: 0; }\n  20% {\n    top: 0;\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var StartPageComponent = (function () {
    function StartPageComponent() {
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent = __decorate([
        core_1.Component({
            selector: 'app-start-page',
            template: __webpack_require__("../../../../../src/app/start-page/start-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/start-page/start-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StartPageComponent);
    return StartPageComponent;
}());
exports.StartPageComponent = StartPageComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map