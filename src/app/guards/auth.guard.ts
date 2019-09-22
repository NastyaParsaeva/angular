import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    return of(this.authService.isAuthentificated()).pipe(
      map(resp => {
        if (!resp) {
          this.router.navigate(['/login']);
        }
        return resp;
      }));
  }   
  
}
