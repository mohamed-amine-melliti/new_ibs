import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.authService.isAuthenticated().pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/auth/signin']);
          return false;
        }
      })
    );
  }
}