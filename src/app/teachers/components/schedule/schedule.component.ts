import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {
  public schedule: any[];
  public loading: boolean = true;

  constructor(
    private _teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.loadSchedule();
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

  loadSchedule() {
    this.schedule = [
      {
        session: '16:00:00-16:45:00',
        monday: 'ITI 10A',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
      },
      {
        session: '16:45:00-17:30:00',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
      },
      {
        session: '17:30:00-18:15:00',
        monday: '',
        tuesday: 'ITI 10B',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
      },
      {
        session: '18:15:00-18:35:00',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
      },
      {
        session: '18:35:00-19:20:00',
        monday: '',
        tuesday: 'ITI 10B',
        wednesday: '',
        thursday: '',
        friday: 'ITI 10A',
        saturday: ''
      },
      {
        session: '19:20:00-20:05:00',
        monday: '',
        tuesday: 'ITI 10B',
        wednesday: '',
        thursday: '',
        friday: 'ITI 10A',
        saturday: ''
      }
    ]
  }

}
