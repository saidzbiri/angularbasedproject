import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.currentUser;
    if (
      user &&
      user.admin
      ) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;

  }
}
