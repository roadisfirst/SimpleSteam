import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendRelationsService } from 'src/app/core/services/friend-relations.service';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models';

@Component({
  selector: 'steam-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friends$: Observable<User[]>;
  public users$: Observable<User[]>;
  public searchFriends: string;
  public friendsList: string[] = [];
  constructor(
    private readonly usersService: UsersService,
    private readonly relationsService: FriendRelationsService,
  ) { }

  public ngOnInit(): void {
    this.getFriends();
    this.getUsers();
    this.getFriendsList();
  }

  public getFriends(): void {
    this.friends$ = this.usersService.fetchUserFriends();
  }

  public deleteFromFriends(userId: string): void {
    console.log(userId);
    this.usersService.unfriend(userId).subscribe(
      res => {
        console.log(res.message);
        this.getFriends();
        this.getFriendsList();
      },
      error => {
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
      console.log(this.friendsList);
    });
  }

  public isUserInFriendsList(id: string): boolean {
    return this.friendsList.includes(id);
  }

  public getUsername: (user: User) => string = (user) => user.username;

}
