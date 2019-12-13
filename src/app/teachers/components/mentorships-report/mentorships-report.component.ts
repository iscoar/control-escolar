import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mentorships-report',
  templateUrl: './mentorships-report.component.html',
  styleUrls: ['./mentorships-report.component.sass']
})
export class MentorshipsReportComponent implements OnInit {
  public id: any;
  public reason: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    swal.fire({
      title: `¿Estás seguro de reportar a ${this.id}?`,
      text: `Razon: ${this.reason}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, reportar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Alumno reportado!',
          `Se envio con exito la razon de reportar a ${this.id}`,
          'success'
        )
      }
    })
  }
}
