import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.library$ = this.gamesService.showGamesFromLibrary();
  }

  public download(id: string): void {
    window.alert(`You are now downloading game with id ${id}`);
  }

  public share(id: string): void {
    const link = this.router['location']._platformLocation.location.origin + '/games/' + id;
    window.alert(`You can share the link ${link}`);
  }
}
