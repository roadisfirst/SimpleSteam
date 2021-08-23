import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models';


const ROOT_API = '/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(ROOT_API + '/login', {
      email,
      password
    });
  }
}
