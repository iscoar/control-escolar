import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/account/account.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoricalComponent } from './components/historical/historical.component';


const routes: Routes = [
  { path: 'perfil', component: ProfileComponent },
  { path: 'cuenta', component: AccountComponent },
  { path: 'calificaciones', component: ScoreComponent },
  { path: 'historico', component: HistoricalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
