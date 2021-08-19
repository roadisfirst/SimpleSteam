import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SteamRoutingModule } from './steam-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsComponent } from './pages/friends/friends.component';
import { GamesComponent } from './pages/games/games.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LibraryComponent } from './pages/library/library.component';


@NgModule({
  declarations: [
    LoginComponent,
    FriendsComponent,
    GamesComponent,
    ProfileComponent,
    LibraryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SteamRoutingModule
  ]
})
export class SteamModule { }
