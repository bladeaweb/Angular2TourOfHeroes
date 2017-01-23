import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import {AppRoutingModule} from "./routes.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

import { AppComponent }  from '../components/app.component';
import { HeroDetailComponent } from "../components/heroes-details/heroes-details.component";
import { HeroService } from "../services/hero.service";
import { HeroesComponent } from "../components/heroes-list/heroes.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
    ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
