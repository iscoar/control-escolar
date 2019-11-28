import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;

  constructor(
    private _route: ActivatedRoute
  ) {
    this.assetsUrl = 'assets/img/Iconos/';
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this._route.params.subscribe(
      params => {
        this.items = [
          {
            title: 'Calificaciones',
            icon: 'Profesor/Registrar calificaciones.png',
            color: 'ce-calificaciones',
            url: '/grupo/'+params['name']+'/materia/'+params['subject']+'/calificaciones'
          },
          {
            title: 'Asistencia',
            icon: 'Profesor/Asistencias.png',
            color: 'ce-asistencia',
            url: '/grupo/'+params['name']+'/materia/'+params['subject']+'/asistencia'
          },
        ];
      }
    )
  }

}
