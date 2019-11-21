import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;
  constructor(
    private _home: HomeComponent
  ) {
    this.items = this._home.items;
    this.assetsUrl = this._home.assetsUrl;
  }

  ngOnInit() {
  }

}
