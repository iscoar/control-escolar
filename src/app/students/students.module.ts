import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/account/account.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LoadComponent } from '../components/load/load.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AccountComponent,
    ScoreComponent,
    HistoricalComponent,
    ScheduleComponent,
    LoadComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
