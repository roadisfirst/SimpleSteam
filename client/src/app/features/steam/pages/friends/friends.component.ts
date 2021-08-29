import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendRelationsService } from 'src/app/core/services/friend-relations.service';
import { UsersService } from 'src/app/core/services/users.service';
import { InviteStatus, User } from 'src/app/models';

@Component({
  selector: 'steam-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friends$: Observable<User[]>;
  public users$: Observable<User[]>;
  public usersWithInvites$: Observable<User[]>;
  public recieverIdsFromSentInvites: string[] = [];
  public senderIdsFromRecievedInvites: string[] = [];
  public searchFriends: string;
  public friendsList: string[] = [];
  public InviteStatusTypes = InviteStatus;
  public errorMessage = '';
  public infoMessage = '';
  constructor(
    private readonly usersService: UsersService,
    private readonly relationsService: FriendRelationsService,
  ) { }

  public ngOnInit(): void {
    this.getFriends();
    this.getUsers();
    this.getFriendsList();
    this.getRecieverIdsList();
    this.getSenderIdsList();
    this.getUsersWithInvites();
  }

  public getFriends(): void {
    this.friends$ = this.usersService.fetchUserFriends();
  }

  public getUsersWithInvites(): void {
    this.usersWithInvites$ = this.usersService.fetchUsersWithPendingInvites();
  }

  public deleteFromFriends(userId: string): void {
    this.usersService.unfriend(userId).subscribe(
      res => {
        this.infoMessage = res.message;
        console.log(res.message);
        this.getFriends();
        this.getFriendsList();
      },
      error => {
        this.errorMessage = error.message;
        console.log(error);
      });
    console.log('request sent. Waiting for response...');
  }

  public addToFriends(userId: string): void {
    console.log(userId);
    this.relationsService.sendInvite(userId).subscribe(
      res => {
        console.log(res.message);
        this.getFriends();
        this.getRecieverIdsList();
        this.getFriendsList();
      },
      error => {
        console.log(error);
      });
    console.log('request sent. Waiting for response...');
  }

  
  public cancelFriendInvite(recieverId: string): void {
    this.relationsService.cancelInvite(recieverId).subscribe(
      res => {
        console.log(res.message);
        this.getRecieverIdsList();
        this.getSenderIdsList();
        this.getUsersWithInvites();
      },
      error => {
        console.log(error);
      });
    console.log('request sent. Waiting for response...');
  }

  public answerUserInvite(senderId: string, status: InviteStatus): void {
    this.relationsService.answerInvite(senderId, status).subscribe(
      res => {
        console.log(res.message);
        this.getSenderIdsList();
        this.getUsersWithInvites();
        this.getFriends();
      },
      error => {
        console.log(error);
      });
    console.log('request sent. Waiting for response...');
  }

  public getUsers(): void {
    this.users$ = this.usersService.fetchUsers();
  }

  public getFriendsList(): void {
    this.usersService.getFriendsIdArray().subscribe(friendsIds => {
      this.friendsList = friendsIds;
    });
  }

  public isUserInFriendsList(id: string): boolean {
    return this.friendsList.includes(id);
  }

  public getUsername: (user: User) => string = (user) => user.username;

  public getRecieverIdsList(): void {
    this.relationsService.getRecieverIdsArr().subscribe(recieverIds => {
      this.recieverIdsFromSentInvites = recieverIds;
    });
  }

  public getSenderIdsList(): void {
    this.relationsService.getSenderIdsArr().subscribe(senderIds => {
      this.senderIdsFromRecievedInvites = senderIds;
    });
  }

  public isUserInRecieverIdsList(id: string): boolean {
    return this.recieverIdsFromSentInvites.includes(id);
  }

  public isUserInSenderIdsList(id: string): boolean {
    return this.senderIdsFromRecievedInvites.includes(id);
  }

}
