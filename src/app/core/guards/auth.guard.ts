import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    isAuth: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
        this.authService.currentUserData().subscribe((data) => {
            this.isAuth = data ? true : false;
        });
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.isAuth) {
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}
