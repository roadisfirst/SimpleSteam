import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models';

const ROOT_API = '/api/friendRelations';

@Injectable({
  providedIn: 'root'
})
export class FriendRelationsService {

  constructor(private http: HttpClient) { }

  public sendInvite(recieverId: string): Observable<Message> {
    return this.http.post<Message>(ROOT_API + '/sendInvite', {recieverUserId: recieverId});
  }

  public cancelInvite(): Observable<Message> {
    return this.http.delete<Message>(ROOT_API + '/cancelInvite');
  }

  public answerInvite(status: string): Observable<Message> {
    return this.http.patch<Message>(ROOT_API + '/answerInvite', status);
  }
}
