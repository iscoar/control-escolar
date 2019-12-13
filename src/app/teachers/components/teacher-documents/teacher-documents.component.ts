import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-documents',
  templateUrl: './teacher-documents.component.html',
  styleUrls: ['./teacher-documents.component.sass']
})
export class TeacherDocumentsComponent implements OnInit {
  public item: any;
  public assetsUrl: string;
  public loading: boolean = false;

  constructor() {
    this.assetsUrl = 'assets/img/Iconos/';
    this.item = {
      title: 'Adjuntar',
      icon: 'Profesor/Adjuntar documentos.png',
      color: 'ce-documentos',
    }
  }

  ngOnInit() {
  }

  upload() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      swal.fire(
        'Completado!',
        'Tu planeación se subío correctamente!',
        'success'
      )
    }, 5000);
  }

}
