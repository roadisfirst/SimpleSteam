import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'steam-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoSrc = 'assets/images/logo.png';
  public isLoggedIn = false;
  constructor(
    private tokenStorage: TokenStorageService
  ) {
  }

  public ngOnInit(): void {
    this.isLoggedIn = this.tokenStorage.isAuthenticated();
  }

}
