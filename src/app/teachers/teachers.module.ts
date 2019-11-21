import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/group/group.component';
import { GroupScoreComponent } from './components/group-score/group-score.component';
import { GroupAttendanceComponent } from './components/group-attendance/group-attendance.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherDocumentsComponent } from './components/teacher-documents/teacher-documents.component';
import { MentorshipsComponent } from './components/mentorships/mentorships.component';
import { MentorshipsCanalizeComponent } from './components/mentorships-canalize/mentorships-canalize.component';
import { MentorshipsReportComponent } from './components/mentorships-report/mentorships-report.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    GroupsComponent,
    GroupComponent,
    GroupScoreComponent,
    GroupAttendanceComponent,
    ScheduleComponent,
    TeacherDocumentsComponent,
    MentorshipsComponent,
    MentorshipsCanalizeComponent,
    MentorshipsReportComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class TeachersModule { }
