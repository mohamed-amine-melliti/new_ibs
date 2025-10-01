import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartupComponent } from './smartup.component';

const routes: Routes = [
  {
    path: '',
    component: SmartupComponent,
    children: [
      {
        path: 'contrats-client',
        loadComponent: () => import('./contrats-client/contrats-client.component').then(m => m.ContratsClientComponent)
      },
      {
        path: '',
        redirectTo: 'contrats-client',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SmartupComponent
  ]
})
export class SmartupModule { }