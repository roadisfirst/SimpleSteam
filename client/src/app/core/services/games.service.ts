import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Tag } from '../../models';

const ROOT_API = '/api/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public fetchGames(): Observable<Game[]> {
    return this.http.get<Game[]>(ROOT_API);
  }

  public fetchGameById(gameId: string): Observable<Game> {
    return this.http.get<Game>(ROOT_API + `/about/${gameId}`);
  }

  public showGamesFromLibrary(): Observable<Game[]> {
    return this.http.get<Game[]>(ROOT_API + '/library');
  }

  public fetchGameTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ROOT_API + '/tags');
  }
}
