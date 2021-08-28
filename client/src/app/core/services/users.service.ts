import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, User} from 'src/app/models';

const ROOT_API = '/api/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(ROOT_API);
  }
  
  public unfriend(id: string): Observable<Message> {
    return this.http.patch<Message>(ROOT_API + `/unfriend/${id}`, id);
  }

  public fetchUserFriends(): Observable<User[]> {
    return this.http.get<User[]>(ROOT_API + '/friends');
  }

  public getFriendsIdArray(): Observable<string[]> {
    return this.http.get<string[]>(ROOT_API + '/friendsArray');
  }

  public fetchUsersWithPendingInvites(): Observable<User[]> {
    return this.http.get<User[]>(ROOT_API + '/pendingInvitesUsers');
  }
}
