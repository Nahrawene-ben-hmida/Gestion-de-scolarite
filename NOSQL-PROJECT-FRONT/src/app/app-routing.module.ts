import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {AuthenticationGuard} from "./demo/pages/authentication/authentication.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule),
        canLoad: [AuthenticationGuard]

      },
      {
        path: 'etudiant',
        loadChildren: () => import('./demo/etudiant/etudiant.module').then(m => m.EtudiantModule),
        canLoad: [AuthenticationGuard]
      },
      {
        path: 'enseignant',
        loadChildren: () => import('./demo/enseignant/enseignant.module').then(m => m.EnseignantModule),
        canLoad: [AuthenticationGuard]
      },
      {
        path: 'cadres-admin',
        loadChildren: () => import('./demo/cadres-admin/cadres-admin.module').then(m => m.CadresAdminModule),
        canLoad: [AuthenticationGuard]
      },
      {
        path: 'gestion-scolarite',
        loadChildren: () => import('./demo/gestion-scolarite/gestion-scolarite.module').then(m => m.GestionScolariteModule),
        canLoad: [AuthenticationGuard]
      }
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
