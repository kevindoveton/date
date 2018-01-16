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
exports.push([module.i, ".app {\n  background-color: #2B77D6;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  font-family: 'Bitter', Arial, serif;\n  color: white;\n  font-weight: 100; }\n  .app .center.heading {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n    .app .center.heading h1 {\n      font-size: 50px;\n      font-weight: 100;\n      text-align: center;\n      margin: 0;\n      padding-bottom: 8px; }\n    .app .center.heading button {\n      margin: 0;\n      padding: 8px 48px;\n      background: white;\n      border: 0; }\n  .app .dt {\n    position: absolute;\n    bottom: 20px;\n    left: 20px; }\n    .app .dt h2,\n    .app .dt h3 {\n      margin: 0;\n      font-weight: 100; }\n    .app .dt h2 {\n      font-size: 30px;\n      letter-spacing: 2px; }\n    .app .dt h3 {\n      font-size: 13px; }\n", ""]);

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
                place_component_1.PlaceComponent
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
        this.showCompassNoSupport = true;
        this.currentHeading = 0;
        this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
        this.compassWatch = undefined;
        this.gpsWatch = undefined;
        this.distanceToTarget = 4.0;
        this.directionToTarget = 'rotate(0deg)';
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
    CompassComponent.prototype.updateCompassDirection = function () {
        this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
    };
    CompassComponent.prototype.updateDistanceToTarget = function (cur, target) {
        this.distanceToTarget = this.getDistanceFromLatLonInKm(cur[0], cur[1], target[0], target[1]);
        this.directionToTarget = 'rotate(' + this.getDirection(cur[0], cur[1], target[0], target[1]) + 'deg)';
        this.updateCompassDirection();
        console.log(cur, target, this.directionToTarget);
        // alert(this.getDirection(cur[0], cur[1], target[0], target[1]));
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

module.exports = "<div class=\"app\" [style.backgroundColor]=\"currentLocation['bg']\">\n  <h2>{{currentLocation['name']}}</h2>\n  <div class=\"compass container\">\n    <app-compass [targetLocation]=\"currentLocation['loc']\"></app-compass>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/place/place.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".compass.container {\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n", ""]);

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
var PlaceComponent = (function () {
    function PlaceComponent() {
        this.locations = [
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
        this.currentLocation = this.locations[0];
    }
    PlaceComponent.prototype.ngOnInit = function () { };
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

/***/ "../../../../../src/app/start-page/start-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <div class=\"center heading\">\n    <h1>Arr,</h1>\n    <button routerLink=\"place\">Continue</button>\n  </div>\n  <div class=\"dt\">\n    <h2>8am</h2>\n    <h3>20.01.2018</h3>\n  </div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app .center.heading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .app .center.heading h1 {\n    font-size: 50px;\n    font-weight: 100;\n    text-align: center;\n    margin: 0;\n    padding-bottom: 8px; }\n  .app .center.heading button {\n    margin: 0;\n    padding: 8px 48px;\n    background: white;\n    border: 0; }\n\n.app .dt {\n  position: absolute;\n  bottom: 20px;\n  left: 20px; }\n  .app .dt h2,\n  .app .dt h3 {\n    margin: 0;\n    font-weight: 100; }\n  .app .dt h2 {\n    font-size: 30px;\n    letter-spacing: 2px; }\n  .app .dt h3 {\n    font-size: 13px; }\n", ""]);

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