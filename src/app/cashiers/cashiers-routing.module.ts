import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeComponent } from './components/charge/charge.component';


const routes: Routes = [
  {path: 'cobrar', component: ChargeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashiersRoutingModule { }
