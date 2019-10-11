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
        icon: 'Compartido/Avisos.png',
        color: 'ce-avisos',
        url: ''
      },
      {
        title: 'Calificaciones',
        icon: 'Alumno/Calificaciones.png',
        color: 'ce-calificaciones',
        url: ''
      },
      {
        title: 'Cuenta',
        icon: 'Compartido/Estado de cuenta.png',
        color: 'ce-cuenta',
        url: ''
      },
      {
        title: 'Historico',
        icon: 'Alumno/Historico.png',
        color: 'ce-historico',
        url: ''
      },
      {
        title: 'Perfil',
        icon: 'Alumno/Perfil.png',
        color: 'ce-perfil',
        url: '/perfil'
      },
      {
        title: 'Salir',
        icon: 'Compartido/Cerrar sesión.png',
        color: 'ce-salir',
        url: ''
      }
    ]
  }

  ngOnInit() {
  }

}
