import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models';

const ROOT_API = '/api/users/profile';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getUserDetails(): Observable<User> {
    return this.http.get<User>(ROOT_API, httpOptions);
  }

  public updateUserDetails(username: string, email: string, age: number): Observable<User> {
    return this.http.put<User>(ROOT_API, {
      username,
      email,
      age
    }, httpOptions);
  }
}
