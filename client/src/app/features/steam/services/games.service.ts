import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models';

const ROOT_API = '/api/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<Game[]> {
    return this.http.get<Game[]>(ROOT_API);
  }
}
