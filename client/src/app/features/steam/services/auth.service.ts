import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const ROOT_API = '/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{email: string, jwt_token: string}> {
    return this.http.post<{email: string, jwt_token: string}>(ROOT_API + '/login', {
      email,
      password
    });
  }
}
