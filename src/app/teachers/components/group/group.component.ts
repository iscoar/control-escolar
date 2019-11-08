import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;

  constructor() {
    this.assetsUrl = 'assets/img/Iconos/';
    this.items = [
      {
        title: 'Calificaciones',
        icon: 'Profesor/Registrar calificaciones.png',
        color: 'ce-calificaciones',
        url: '/grupo/itib/calificaciones'
      },
      {
        title: 'Asistencia',
        icon: 'Profesor/Asistencias.png',
        color: 'ce-asistencia',
        url: '/grupo/itib/asistencia'
      },
    ]
  }

  ngOnInit() {
  }

}
