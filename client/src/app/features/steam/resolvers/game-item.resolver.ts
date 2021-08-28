import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { GamesService } from 'src/app/core/services/games.service';
import { Game } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class GameItemResolver implements Resolve<Game> {
  public constructor (
    private readonly gamesService: GamesService,
  ) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> {
    return this.gamesService.fetchGameById(route.params.gameId);
  }
}
