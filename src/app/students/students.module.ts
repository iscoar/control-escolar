import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/account/account.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoricalComponent } from './components/historical/historical.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AccountComponent,
    ScoreComponent,
    HistoricalComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
