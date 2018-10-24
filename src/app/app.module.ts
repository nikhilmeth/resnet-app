import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { TravelComponent } from './travel.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EventsComponent } from './events.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-travel', component: TravelComponent },
  { path: 'app-events', component: EventsComponent },  
  { path: 'app-home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TravelComponent,
    PageNotFoundComponent,
    EventsComponent,
    HomeComponent
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
