import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './../../services/global';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  public url: string;
  public identity;
  public token;

  constructor(
    public _http: HttpClient,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
  }

  groups(): Observable<any> {
    let id = this.identity.sub;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url+'teacher/'+id+'/groups');
  }

  groupSubjects(group_id): Observable<any> {
    let id = this.identity.sub;

    return this._http.get(this.url+'teacher/'+id+'/group/'+group_id+'/subjects');
  }
}
