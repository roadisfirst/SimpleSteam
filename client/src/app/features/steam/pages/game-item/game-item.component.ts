import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models';

@Component({
  selector: 'steam-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  public game: Game;

  @Input() gameItem: Game;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.game = this.activatedRoute.snapshot.data.game;
    !this.gameItem ? this.gameItem = this.game : this.gameItem;
  }

}
