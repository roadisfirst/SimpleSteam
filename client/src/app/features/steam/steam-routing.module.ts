import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { FriendsComponent } from './pages/friends/friends.component';
import { GamesComponent } from './pages/games/games.component';
import { LibraryComponent } from './pages/library/library.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'friends',
    component: FriendsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    component: GamesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'library',
    component: LibraryComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteamRoutingModule { }
