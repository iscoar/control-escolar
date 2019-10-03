import { UserService } from './services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UserService]
})
export class AppComponent {
  public title = 'control-escolar';
  public identity;
  public token;

  constructor(
    public _userService: UserService
  ){
    this.loadUser();
  }

  ngOnInit() {
    console.log('pagina cargada');
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
