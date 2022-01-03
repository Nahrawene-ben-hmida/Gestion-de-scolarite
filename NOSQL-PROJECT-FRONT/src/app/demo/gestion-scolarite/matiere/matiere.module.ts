import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatiereRoutingModule } from './matiere-routing.module';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatiereComponent} from "./matiere.component";
import {SharedModule} from "../../../theme/shared/shared.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [MatiereComponent],
  imports: [
    CommonModule,
    MatiereRoutingModule,
    SharedModule,
    NgbDropdownModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class MatiereModule { }
