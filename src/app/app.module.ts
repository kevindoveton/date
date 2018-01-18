import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// import { RoutesRoutingModule } from './routes/routes-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CompassComponent } from './compass/compass.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { PickingComponent } from './picking/picking.component';
import { PlaceComponent } from './place/place.component';
import { PyroComponent } from './pyro/pyro.component';


const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'place', component: PlaceComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    StartPageComponent,

    CompassComponent,

    BreakfastComponent,

    PickingComponent,

    PlaceComponent,

    PyroComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
