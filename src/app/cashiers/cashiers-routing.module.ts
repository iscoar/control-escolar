import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeComponent } from './components/charge/charge.component';
import { HomeComponent } from '../components/home/home.component';
import { UserGuard } from '../guards/user.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [UserGuard], children: [
      { path: 'cobrar', component: ChargeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashiersRoutingModule { }
