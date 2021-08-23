import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { Game } from '../../../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'steam-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games$: Observable<Game[]>;
  public searchGame: string;
  constructor(
    private readonly gamesService: GamesService
  ) { }

  public ngOnInit(): void {
    this.games$ = this.gamesService.fetch();
  }

  public getName : (game: Game) => string = (game) => game.name;
}
