import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadresAdminComponent} from "./cadres-admin.component";


const routes: Routes = [{
  path:'',
  component:CadresAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadresAdminRoutingModule { }
