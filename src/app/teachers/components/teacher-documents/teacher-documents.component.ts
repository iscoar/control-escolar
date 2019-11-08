import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-documents',
  templateUrl: './teacher-documents.component.html',
  styleUrls: ['./teacher-documents.component.sass']
})
export class TeacherDocumentsComponent implements OnInit {
  public item: any;
  public assetsUrl: string;

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

}
