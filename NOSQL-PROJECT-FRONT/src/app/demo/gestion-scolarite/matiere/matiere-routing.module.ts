import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashAnalyticsComponent} from "../../dashboard/dash-analytics/dash-analytics.component";
import {MatiereComponent} from "./matiere.component";


const routes: Routes = [
  {
    path: '',
    component: MatiereComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereRoutingModule { }
