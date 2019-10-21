import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  public tabs: any[];

  constructor() {
    this.tabs = [
      {
        title: 'GENERALES',
        status: true,
        styles: 'active'
      },
      {
        title: 'DOMICILIO',
        status: false,
        styles: ''
      },
      {
        title: 'ESCOLARES',
        status: false,
        styles: ''
      },
      // {
      //   title: 'DATOS SOCIO-ECONÓMICOS',
      //   status: false,
      //   styles: ''
      // }
    ]
  }

  ngOnInit() {
    console.log(this.tabs);
  }

  showtab(index: number) {
    for (const tab of this.tabs) {
      tab.status = false;
      tab.styles = '';
    }
    this.tabs[index].status = true;
    this.tabs[index].styles = 'active';
  }

}
