import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from "./heroes-details/heroes-details.component";
import { HeroService } from "./hero.service";
import { HeroesComponent } from "./heroes-list/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./routes.module";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
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
