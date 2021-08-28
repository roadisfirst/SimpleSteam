import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SteamRoutingModule } from './steam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendsComponent } from './pages/friends/friends.component';
import { GamesComponent } from './pages/games/games.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LibraryComponent } from './pages/library/library.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameItemComponent } from './pages/game-item/game-item.component';


@NgModule({
  declarations: [
    FriendsComponent,
    GamesComponent,
    ProfileComponent,
    LibraryComponent,
    GameItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SteamRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SteamModule { }
