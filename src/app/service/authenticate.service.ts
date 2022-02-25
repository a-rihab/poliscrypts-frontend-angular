import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://poliscrypts-backend.herokuapp.com/api';
//const AUTH_API = 'http://localhost:9090/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let loginRequest = {
      username,
      password
    }
    return this.http.post(AUTH_API + '/login', loginRequest, httpOptions);
  }
}
