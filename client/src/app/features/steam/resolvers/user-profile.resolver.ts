import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../models';
import { ProfileService } from '../../../core/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<User> {
  public constructor (
    private readonly profileService: ProfileService,
  ) {}
  
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.profileService.getUserDetails();
  }
}
