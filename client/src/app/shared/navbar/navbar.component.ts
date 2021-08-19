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
  isLoggedIn = true;
  // constructor(
  //   private tokenStorage: TokenStorageService
  // ) {
  // }

  ngOnInit(): void {
    // this.tokenStorage.getUser().subscribe(
    //   (user: User) => {
    //     this.isLoggedIn = true;
    //   });
  }

}
