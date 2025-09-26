import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartupComponent } from './smartup.component';

const routes: Routes = [
  {
    path: '',
    component: SmartupComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SmartupComponent
  ]
})
export class SmartupModule { }