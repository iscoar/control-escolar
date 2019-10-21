import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentorships',
  templateUrl: './mentorships.component.html',
  styleUrls: ['./mentorships.component.sass']
})
export class MentorshipsComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;

  constructor() {
    this.assetsUrl = 'assets/img/Iconos/';
    this.items = [
      {
        title: 'Canalizar',
        icon: 'Profesor/Canalización.png',
        color: 'ce-canalizar',
        url: '/tutorias/canalizar'
      },
      {
        title: 'Reportar',
        icon: 'Profesor/Reportar.png',
        color: 'ce-reportar',
        url: '/tutorias/reportar'
      }
    ]
  }

  ngOnInit() {
  }

}
