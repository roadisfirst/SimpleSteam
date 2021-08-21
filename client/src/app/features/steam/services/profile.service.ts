import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

const ROOT_API = '/api/users/profile';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  // public getUserDetails(): User {
  //   let token = AuthUtil.getToken();
  //   let payload;
  //   if (token) {
  //     payload = token.split(".")[1];
  //     payload = window.atob(payload);
  //     return JSON.parse(payload);
  //   } else {
  //     return null;
  //   }
  // }
  // public getUserDetails(): User {
  //   return this.http.get(ROOT_API, {
  //     email,
  //     password
  //   }, httpOptions);
  // }
  // public updateUserDetails(): Observable<Object> {
  //   return this.http.put(ROOT_API, {
  //     username,
  //     email,
  //     age
  //   }, httpOptions);
  // }
}
