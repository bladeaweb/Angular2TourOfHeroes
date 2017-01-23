import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HeroesComponent} from "../components/heroes-list/heroes.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {HeroDetailComponent} from "../components/heroes-details/heroes-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
