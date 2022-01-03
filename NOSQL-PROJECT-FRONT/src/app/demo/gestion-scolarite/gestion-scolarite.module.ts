import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionScolariteRoutingModule } from './gestion-scolarite-routing.module';
import { SessionComponent } from './session/session.component';
import { ClassComponent } from './class/class.component';
import { SectionComponent } from './section/section.component';
import { MatiereComponent } from './matiere/matiere.component';
import {SharedModule} from "../../theme/shared/shared.module";



@NgModule({
  imports: [
    CommonModule,
    GestionScolariteRoutingModule,
    SharedModule
  ]
})
export class GestionScolariteModule { }
