import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GamesService } from 'src/app/core/services/games.service';

@Injectable({
  providedIn: 'root'
})
export class GameItemResolver implements Resolve<any> {
  public constructor (
    private readonly gamesService: GamesService,
    private readonly router: Router
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.gamesService.fetchGameById(route.params.gameId)
      .pipe(
        catchError((e) => {
          this.router.navigateByUrl('**');
          return of({game: null, error: e.message});
        })
      );
  }

}
