import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/account/account.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { StudentGuard } from '../guards/student.guard';
import { UserGuard } from '../guards/user.guard';
import { HomeComponent } from '../components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [UserGuard], children: [
      { path: '', component: WelcomeComponent },
      { path: 'perfil', component: ProfileComponent, canActivate: [StudentGuard] },
      { path: 'cuenta', component: AccountComponent, canActivate: [StudentGuard] },
      { path: 'calificaciones', component: ScoreComponent, canActivate: [StudentGuard] },
      { path: 'historico', component: HistoricalComponent, canActivate: [StudentGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
