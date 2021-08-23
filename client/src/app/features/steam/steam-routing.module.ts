import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './pages/friends/friends.component';
import { GamesComponent } from './pages/games/games.component';
import { LibraryComponent } from './pages/library/library.component';
import { ProfileComponent } from './pages/profile/profile.component';
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
