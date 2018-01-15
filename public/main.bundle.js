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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Amelia // Kevin // Adventure';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__start_page_start_page_component__ = __webpack_require__("../../../../../src/app/start-page/start-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compass_compass_component__ = __webpack_require__("../../../../../src/app/compass/compass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breakfast_breakfast_component__ = __webpack_require__("../../../../../src/app/breakfast/breakfast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__picking_picking_component__ = __webpack_require__("../../../../../src/app/picking/picking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__place_place_component__ = __webpack_require__("../../../../../src/app/place/place.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { RoutesRoutingModule } from './routes/routes-routing.module';






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__start_page_start_page_component__["a" /* StartPageComponent */] },
    { path: 'place', component: __WEBPACK_IMPORTED_MODULE_8__place_place_component__["a" /* PlaceComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__start_page_start_page_component__["a" /* StartPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__compass_compass_component__["a" /* CompassComponent */],
                __WEBPACK_IMPORTED_MODULE_6__breakfast_breakfast_component__["a" /* BreakfastComponent */],
                __WEBPACK_IMPORTED_MODULE_7__picking_picking_component__["a" /* PickingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__place_place_component__["a" /* PlaceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakfastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreakfastComponent = (function () {
    function BreakfastComponent() {
    }
    BreakfastComponent.prototype.ngOnInit = function () {
    };
    BreakfastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-breakfast',
            template: __webpack_require__("../../../../../src/app/breakfast/breakfast.component.html"),
            styles: [__webpack_require__("../../../../../src/app/breakfast/breakfast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreakfastComponent);
    return BreakfastComponent;
}());



/***/ }),

/***/ "../../../../../src/app/compass/compass.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"showCompassNoSupport == true\">no support for compass</p>\n<div class=\"compass\" *ngIf=\"showCompassNoSupport == false\">\n  <p class=\"black center\">{{distanceToTarget | number: 2}}km</p>\n  <div class=\"compass--circle\">\n    <div class=\"compass--rotate\" [style.transform]=\"compassRotation\">\n      <span class=\"compass--zero\"></span>\n    </div>\n    <span class=\"compass--target\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/compass/compass.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".compass {\n  position: relative; }\n  .compass .center {\n    width: 100%;\n    text-align: center; }\n  .compass .compass--circle {\n    background: #ffffff;\n    border-radius: 50%;\n    width: 200px;\n    height: 200px;\n    position: relative; }\n    .compass .compass--circle .compass--rotate {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%; }\n    .compass .compass--circle .compass--zero {\n      height: 100px;\n      width: 6px;\n      background: red;\n      position: absolute;\n      top: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      z-index: 1; }\n  .compass .compass--target {\n    height: 100px;\n    width: 4px;\n    background: green;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    z-index: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compass/compass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompassComponent = (function () {
    function CompassComponent() {
        this.showCompassNoSupport = true;
        this.currentHeading = 0;
        this.compassRotation = 'rotate(-' + this.currentHeading + 'deg)';
        this.compassWatch = undefined;
        this.gpsWatch = undefined;
        this.distanceToTarget = 4.0;
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
            // this.currentHeading = heading;
            // this.updateCompassDirection();
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
        this.currentHeading = this.getDirection(cur[0], cur[1], target[0], target[1]);
        this.updateCompassDirection();
        return;
    };
    CompassComponent.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    CompassComponent.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    CompassComponent.prototype.getDirection = function (lat1, lng1, lat2, lng2) {
        var PI = Math.PI;
        var dTeta = Math.log(Math.tan((lat2 / 2) + (PI / 4)) / Math.tan((lat1 / 2) + (PI / 4)));
        var dLon = Math.abs(lng1 - lng2);
        var teta = Math.atan2(dLon, dTeta);
        var direction = Math.round(this.radToDeg(teta));
        return direction;
    };
    CompassComponent.prototype.radToDeg = function (rad) {
        return rad * (180 / Math.PI);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CompassComponent.prototype, "targetLocation", void 0);
    CompassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-compass',
            template: __webpack_require__("../../../../../src/app/compass/compass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/compass/compass.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompassComponent);
    return CompassComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PickingComponent = (function () {
    function PickingComponent() {
    }
    PickingComponent.prototype.ngOnInit = function () {
    };
    PickingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-picking',
            template: __webpack_require__("../../../../../src/app/picking/picking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/picking/picking.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PickingComponent);
    return PickingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/place/place.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <h2>{{placeName}}</h2>\n  <div class=\"compass container\">\n    <app-compass [targetLocation]=\"locations[0]\"></app-compass>\n  </div>\n</div>"

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceComponent = (function () {
    function PlaceComponent() {
        this.locations = [
            [-34.7960508, 138.4884457]
        ];
        this.placeName = 'placeName';
    }
    PlaceComponent.prototype.ngOnInit = function () { };
    PlaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-place',
            template: __webpack_require__("../../../../../src/app/place/place.component.html"),
            styles: [__webpack_require__("../../../../../src/app/place/place.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaceComponent);
    return PlaceComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartPageComponent = (function () {
    function StartPageComponent() {
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start-page',
            template: __webpack_require__("../../../../../src/app/start-page/start-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/start-page/start-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map