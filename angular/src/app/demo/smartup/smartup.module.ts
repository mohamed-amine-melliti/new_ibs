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