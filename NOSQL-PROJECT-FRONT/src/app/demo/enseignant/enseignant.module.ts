import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import {EnseignantComponent} from "./enseignant.component";
import {SharedModule} from "../../theme/shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [EnseignantComponent],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    SharedModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class EnseignantModule { }
