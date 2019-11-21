import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UserService]
})
export class AppComponent {
  public title = 'control-escolar';

  constructor(
    private _router: Router
  ){}

  ngOnInit() {
    console.log('pagina cargada');
  }
}
