import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'steam-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games$: Observable<Game[]>;
  constructor(
    private readonly gamesService: GamesService
  ) { }

  public ngOnInit(): void {
    // this.games$ = this.gamesService.getGames$();
  }

}
