import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/steam/models';
import { TokenStorageService } from 'src/app/features/steam/services/token-storage.service';

@Component({
  selector: 'app-navbar',
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

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    // const user = this.tokenStorage.getUser();
    // if(user){
    //   this.isLoggedIn = true;
    // }
  }

}
