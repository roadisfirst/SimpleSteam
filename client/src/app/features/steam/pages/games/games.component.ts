import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { Game, Tag } from '../../../../models';
import { Observable } from 'rxjs';
import { LibraryService } from 'src/app/core/services/library.service';

@Component({
  selector: 'steam-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games$: Observable<Game[]>;
  public tags$: Observable<Tag[]>;
  public selectedTagsArray: string[] = [];
  public searchGame: string;
  public library: string[] = [];
  public minPrice = 0;
  public maxPrice: number;
  public maxVal = 0;
  constructor(
    private readonly gamesService: GamesService,
    private readonly libraryService: LibraryService
  ) { 
    this.games$ = this.gamesService.fetchGames();
    this.tags$ = this.gamesService.fetchGameTags();
  }

  public ngOnInit(): void {
    this.loadLibrary();
    this.setMaxPrice();
    this.maxVal = this.maxPrice;
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
  }

  public loadLibrary(): void {
    this.libraryService.getLibrary().subscribe(gameIds => {
      this.library = gameIds;
    });
  }

  public isGameInLibrary(id: string): boolean {
    return this.library.includes(id);
  }

  public setMaxPrice(): void {
    this.games$.subscribe(data => {
      const priceArr = data.map(elem => Number(elem.price));
      this.maxPrice = Math.max(...priceArr);
    });
  }

  public updateTagArray(e: any, item: Tag): void {
    if(e.target.checked){
      this.selectedTagsArray = [...this.selectedTagsArray, item.name];
    } else {
      this.selectedTagsArray = this.selectedTagsArray.filter(elem => elem !== item.name);
    }
  }

}
