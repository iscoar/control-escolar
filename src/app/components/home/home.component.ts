import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;
  public identity;

  constructor(
    public _userService: UserService
  ) {
    this.loadUser();
    this.assetsUrl = 'assets/img/Iconos/';
  }

  ngOnInit() {
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    switch (this.identity.role) {
      case 'ROLE_STUDENT':
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
            url: '/calificaciones'
          },
          {
            title: 'Cuenta',
            icon: 'Compartido/Estado de cuenta.png',
            color: 'ce-cuenta',
            url: '/cuenta'
          },
          {
            title: 'Historico',
            icon: 'Alumno/Historico.png',
            color: 'ce-historico',
            url: '/historico'
          },
          {
            title: 'Horarios',
            icon: 'Profesor/Horarios.png',
            color: 'ce-horarios',
            url: '/horario'
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
        ];
        break;
      case 'ROLE_TEACHER':
        this.items = [
          {
            title: 'Avisos',
            icon: 'Compartido/Avisos.png',
            color: 'ce-avisos',
            url: ''
          },
          {
            title: 'Grupos',
            icon: 'Profesor/Grupos.png',
            color: 'ce-grupos',
            url: '/grupos'
          },
          {
            title: 'Horarios',
            icon: 'Profesor/Horarios.png',
            color: 'ce-horarios',
            url: `/horario/${this.identity.sub}`
          },
          {
            title: 'Documentos',
            icon: 'Profesor/Documentos.png',
            color: 'ce-documentos',
            url: '/planeacion'
          },
          {
            title: 'Tutorías',
            icon: 'Profesor/Tutorías.png',
            color: 'ce-tutorias',
            url: '/tutorias'
          },
          {
            title: 'Salir',
            icon: 'Compartido/Cerrar sesión.png',
            color: 'ce-salir',
            url: ''
          },
        ];
        break;
      case 'ROLE_ADMINISTRATION':
        this.items = [
          {
            title: 'Alumnos',
            icon: 'Compartido/Avisos.png',
            color: 'ce-avisos',
            url: '/registrar/alumno'
          },
          {
            title: 'Maestros',
            icon: 'Compartido/Avisos.png',
            color: 'ce-avisos',
            url: '/registrar/maestro'
          },
        ];
        break;
      case 'ROLE_CASHIER':
        this.items = [
          {
            title: 'Cobrar',
            icon: 'Compartido/Avisos.png',
            color: 'ce-avisos',
            url: '/cobrar'
          }
        ];
        break;
      case 'ROLE_ADMIN':
        this.items = [];
        break;
      default:
        this.items = [];
        break;
    }

  }

}
