import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models';

const ROOT_API = '/api/users/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {

  }

  public addGameToUserLibrary(gameId: string): Observable<Message> {
    return this.http.patch<Message>(ROOT_API + `/add/${gameId}`,
    gameId,
    );
  }

  public removeGameFromUserLibrary(gameId: string): Observable<Message> {
    return this.http.patch<Message>(ROOT_API + `/remove/${gameId}`,
    gameId,
    );
  }

  public getLibrary(): Observable<string[]> {
    return this.http.get<string[]>(ROOT_API );
  }
}
