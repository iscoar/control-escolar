import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;

  constructor() {
    this.assetsUrl = 'assets/img/Iconos/';
    this.items = [
      {
        title: 'ITI Grupo A',
        icon: 'Profesor/Selección de grupo.png',
        color: 'ce-grupos',
        url: '/grupo/itia'
      },
      {
        title: 'ITI Grupo B',
        icon: 'Profesor/Selección de grupo.png',
        color: 'ce-grupos',
        url: '/grupo/itib'
      },
    ]
  }

  ngOnInit() {
  }

}
