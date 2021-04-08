import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  baseUrl = "http://localhost:4100/all"

  constructor(private http: HttpClient) { }


  create(login: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl, login)
  }
}
