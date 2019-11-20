import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-group-score',
  templateUrl: './group-score.component.html',
  styleUrls: ['./group-score.component.sass']
})
export class GroupScoreComponent implements OnInit {

  elements: any = [
    {id: 91706000, description: 'Modelo de procesos de negocio', evpa1: 9, evpa2: 0.0, evpa3: 0.0,re: 0.0, prom: 0.0},
    {id: 91706000, description: 'Modelo de procesos de negocio', evpa1: 9, evpa2: 0.0, evpa3: 0.0,re: 0.0, prom: 0.0},
    {id: 91706000, description: 'Modelo de procesos de negocio', evpa1: 9, evpa2: 0.0, evpa3: 0.0,re: 0.0, prom: 0.0},
  ];

  headElements = ['Materia', 'Descripcion', 'EVPA1', 'EVPA2', 'EVPA3', 'RE', 'PROM', 'Accion'];

  constructor() { }

  ngOnInit() {
  }

}
