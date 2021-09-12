import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './pages/friends/friends.component';
import { GameItemComponent } from './pages/game-item/game-item.component';
import { GamesComponent } from './pages/games/games.component';
import { LibraryComponent } from './pages/library/library.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GameItemResolver } from './resolvers/game-item.resolver';
import { UserProfileResolver } from './resolvers/user-profile.resolver';


const routes: Routes = [
  {
    path: 'friends',
    component: FriendsComponent,
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GamesComponent,
    pathMatch: 'full',
  },
  {
    path: 'games/:gameId',
    component: GameItemComponent,
    resolve: {
      game: GameItemResolver,
    },
  },
  {
    path: 'library',
    component: LibraryComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: UserProfileResolver
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteamRoutingModule { }
