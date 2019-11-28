import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generarPDF() {
    html2canvas(document.querySelector('.container-fluid'), {
      letterRendering: true,
      allowTaint: true,
      useCORS: true,
      scale: 1
    }).then(function(canvas) {
      let img = canvas.toDataURL("image/png");
      let doc = new jspdf();
      // doc.setFontSize(40);
      // doc.text(35, 25, 'Horario');
      doc.addImage(img,'PNG',7, 20, 195, 105);
      doc.save('horario.pdf');
      console.log('Exito');
    });
  }

}
