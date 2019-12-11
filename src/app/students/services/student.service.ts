import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './../../services/global';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
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

  getInfo(): Observable<any> {
    let id = this.identity.sub;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);

    return this._http.get(this.url+'student/'+id, {headers: headers});
  }

  payments(): Observable<any> {
    let id = this.identity.sub;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url+'student/'+id+'/payments');
  }

  payments_by_level(level_id: number): Observable<any> {
    let id = this.identity.sub;

    return this._http.get(this.url+'student/'+id+'/'+level_id+'/payments');
  }

  payments_by_cycle(level_id: number, cycle_id: number): Observable<any> {
    let id = this.identity.sub;

    return this._http.get(this.url+'student/'+id+'/'+level_id+'/'+cycle_id+'/payments');
  }

  schedule(): Observable<any> {
    let id = this.identity.sub;

    return this._http.get(this.url+'student/'+id+'/schedule');
  }
}
