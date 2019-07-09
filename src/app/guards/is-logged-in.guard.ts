import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild  {

  constructor(private authService: AuthService) {

  }
  public canActivate(): boolean {
    return this.checkIsLoggedIn();
  }
  public canActivateChild(): boolean {
    return this.checkIsLoggedIn();
  }

  private checkIsLoggedIn() {
    return !!(this.authService.user.value);
  }
}
