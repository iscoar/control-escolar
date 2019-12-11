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
  public schedule: any;
  public sessions: any[];
  public days: any[];

  constructor(
    private _teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.loadSchedule();
  }

  loadSchedule() {
    this._teacherService.schedule().subscribe(
      response => {
        // const ordered = {};
        
        // Object.keys(response.data).sort().forEach(function (key) {
        //   ordered[key] = response.data[key];
        // });
        
        // for (const key in ordered) {
        //   if (response.data.hasOwnProperty(key)) {
        //     const element = response.data[key];
        //   }
        // }
        this.schedule = response.data;
        this.sessions = response.sessions;
        this.days = response.days;
        console.log(this.schedule);
      },
      error => {
        console.log(error);
      }
    );
  }

  generarPDF() {
    // html2canvas(document.querySelector('.container-fluid'), {
    //   letterRendering: true,
    //   allowTaint: true,
    //   useCORS: true,
    //   scale: 1
    // }).then(function(canvas) {
    //   let img = canvas.toDataURL("image/png");
    //   let doc = new jspdf();
    //   // doc.setFontSize(40);
    //   // doc.text(35, 25, 'Horario');
    //   doc.addImage(img,'PNG',7, 20, 195, 105);
    //   doc.save('horario.pdf');
    // });
    console.log('Exito');
  }

}
