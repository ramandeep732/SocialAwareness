import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://acs-apis.azurewebsites.net/index.php/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(firstname: string,lastname: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firstname,
      lastname,
      email,
      password
    }, httpOptions);
  }
}
