import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { Game } from '../../../../models';
import { Observable } from 'rxjs';
import { LibraryService } from 'src/app/core/services/library.service';

@Component({
  selector: 'steam-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games$: Observable<Game[]>;
  public searchGame: string;
  public library: string[] = [];
  constructor(
    private readonly gamesService: GamesService,
    private readonly libraryService: LibraryService
  ) { }

  public ngOnInit(): void {
    this.games$ = this.gamesService.fetch();
    this.loadLibrary();
  }

  public getName: (game: Game) => string = (game) => game.name;

  public addToLibrary(gameId: string): void {
    this.libraryService.addGameToUserLibrary(gameId).subscribe(
      res => {
        console.log(res.message);
        this.loadLibrary();
      },
      error => {
        console.log(error);
      });
    console.log('request sent. Waiting for response...');
  }

  public removeFromLibrary(gameId: string): void {
    this.libraryService.removeGameFromUserLibrary(gameId).subscribe(
      res => {
        console.log(res.message);
        this.loadLibrary();
      },
      error => {
        console.log(error);
      });
    console.log('request sent. Waiting for response...');
  }

  public loadLibrary(): void {
    this.libraryService.getLibrary().subscribe(gameIds => {
      this.library = gameIds;
      console.log(this.library);
    });
    
  }

  public isGameInLibrary(id: string): boolean {
    return this.library.includes(id);
  }
}
