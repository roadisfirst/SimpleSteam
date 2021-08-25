import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, User } from 'src/app/models';

const ROOT_API = '/api/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public addGameToUserLibrary(gameId: string): Observable<Message> {
    return this.http.patch<Message>(ROOT_API + `/library/add/${gameId}`,
    gameId,
    );
  }

}
