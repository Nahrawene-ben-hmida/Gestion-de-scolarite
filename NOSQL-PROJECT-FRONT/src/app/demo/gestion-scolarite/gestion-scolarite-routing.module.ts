import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'session',
      loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
    },
    {
      path: 'section',
      loadChildren: () => import('./section/section.module').then(m => m.SectionModule)
    },
    {
      path: 'matiere',
      loadChildren: () => import('./matiere/matiere.module').then(m => m.MatiereModule)
    },
    {
      path: 'class',
      loadChildren: () => import('./class/class.module').then(m => m.ClassModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionScolariteRoutingModule { }
