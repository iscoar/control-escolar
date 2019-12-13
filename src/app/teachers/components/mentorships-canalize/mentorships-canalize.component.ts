import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mentorships-canalize',
  templateUrl: './mentorships-canalize.component.html',
  styleUrls: ['./mentorships-canalize.component.sass']
})
export class MentorshipsCanalizeComponent implements OnInit {
  public id: any;
  public reason: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    swal.fire({
      title: `¿Estás seguro de canalizar a ${this.id}?`,
      text: `Razon: ${this.reason}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, canalizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Alumno canalizado!',
          `Se envio con exito la razon de canalizar a ${this.id}`,
          'success'
        )
      }
    })
  }

}
