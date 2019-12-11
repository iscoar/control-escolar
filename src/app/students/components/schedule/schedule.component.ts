import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {
  public schedule: any[] = [];

  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadSchedule();
  }

  loadSchedule() {
    this._studentService.schedule().subscribe(
      response => {
        const ordered = {};

        Object.keys(response.data).sort().forEach(function (key) {
          ordered[key] = response.data[key];
        });
        
        for (const key in ordered) {
          if (response.data.hasOwnProperty(key)) {
            const element = response.data[key];
            this.schedule.push(element);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
