import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<boolean> {
  public constructor (
    private readonly profileService: ProfileService,
  ) {}
  
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
    // return this.profileService.getUserDetails();
  }
}
