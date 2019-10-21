import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/group/group.component';
import { GroupScoreComponent } from './components/group-score/group-score.component';
import { GroupAttendanceComponent } from './components/group-attendance/group-attendance.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherDocumentsComponent } from './components/teacher-documents/teacher-documents.component';
import { MentorshipsComponent } from './components/mentorships/mentorships.component';
import { MentorshipsCanalizeComponent } from './components/mentorships-canalize/mentorships-canalize.component';
import { MentorshipsReportComponent } from './components/mentorships-report/mentorships-report.component';



const routes: Routes = [
  { path: 'grupos', component: GroupsComponent },
  { path: 'grupo/:name', component: GroupComponent },
  { path: 'grupo/:name/calificaciones', component: GroupScoreComponent },
  { path: 'grupo/:name/asistencia', component: GroupAttendanceComponent },
  { path: 'horario', component: ScheduleComponent },
  { path: 'planeacion', component: TeacherDocumentsComponent },
  { path: 'tutorias', component: MentorshipsComponent },
  { path: 'tutorias/canalizar', component: MentorshipsCanalizeComponent },
  { path: 'tutorias/reportar', component: MentorshipsReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
