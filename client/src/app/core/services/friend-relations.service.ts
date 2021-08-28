import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InviteStatus, Message } from 'src/app/models';

const ROOT_API = '/api/friendRelations';

@Injectable({
  providedIn: 'root'
})
export class FriendRelationsService {

  constructor(private http: HttpClient) { }

  public sendInvite(recieverId: string): Observable<Message> {
    return this.http.post<Message>(ROOT_API + '/sendInvite', {recieverUserId: recieverId});
  }

  public cancelInvite(recieverId: string): Observable<Message> {
    return this.http.delete<Message>(ROOT_API + `/cancelInvite/${recieverId}`);
  }

  public answerInvite(senderId: string, status: InviteStatus): Observable<Message> {
    return this.http.patch<Message>(ROOT_API + '/answerInvite', {senderId, status});
  }

  public getRecieverIdsArr(): Observable<string[]> {
    return this.http.get<string[]>(ROOT_API + '/getSentInvitesRecieverIdsArr');
  }

  public getSenderIdsArr(): Observable<string[]> {
    return this.http.get<string[]>(ROOT_API + '/getRecievedInvitesSenderIdsArr');
  }
}
