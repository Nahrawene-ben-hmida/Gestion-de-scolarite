import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadresAdminRoutingModule } from './cadres-admin-routing.module';
import {CadresAdminComponent} from "./cadres-admin.component";
import {SharedModule} from "../../theme/shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [CadresAdminComponent],
  imports: [
    CommonModule,
    CadresAdminRoutingModule,
    SharedModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class CadresAdminModule { }
