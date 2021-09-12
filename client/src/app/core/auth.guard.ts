import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    if(this.tokenStorage.isAuthenticated()){
      return of(true);
    } else {
      this.router.navigate(['/login']);
    }
    return of(false);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
      return this.canActivate(route, state);
    }
}
