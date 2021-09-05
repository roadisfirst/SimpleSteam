import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesService } from 'src/app/core/services/games.service';
import { Game } from 'src/app/models';

@Component({
  selector: 'steam-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public library$: Observable<Game[]>;
  constructor(
    private readonly gamesService: GamesService,
  ) { }

  public ngOnInit(): void {
    this.library$ = this.gamesService.showGamesFromLibrary();
  }

  public download(id: string): void {
    window.alert(`You are now downloading game with id ${id}`);
  }

  public share(id: string): void {
    const link = window.location.origin +  '/games/' + id;
    window.alert(`You can share the link ${link}`);
  }
}
