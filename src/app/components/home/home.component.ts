import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;

  constructor() {
    this.assetsUrl = 'assets/img/Iconos/';
    this.items = [
      {
        title: 'Avisos',
        icon: 'fas fa-trash',
        color: 'text-primary',
        url: ''
      },
      {
        title: 'Calificaciones',
        icon: 'Alumno/Calificaciones.png',
        color: 'deep-orange-text',
        url: ''
      },
      {
        title: 'Cuenta',
        icon: 'fas fa-trash',
        color: 'text-info',
        url: ''
      },
      {
        title: 'Historico',
        icon: 'Alumno/Historico.png',
        color: 'text-success',
        url: ''
      },
      {
        title: 'Perfil',
        icon: 'Alumno/Perfil.png',
        color: 'text-danger',
        url: '/perfil'
      },
      {
        title: 'Salir',
        icon: 'fas fa-trash',
        color: 'deep-purple-text',
        url: ''
      }
    ]
  }

  ngOnInit() {
  }

}
