import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { TravelComponent } from './travel.component';

const appRoutes: Routes = [
  { path: 'app-about', component: AboutComponent },
  { path: 'app-travel', component: TravelComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
