import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route, Router,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import {UserService} from "../../services/User/user.service";
import {Observable, of, throwError} from "rxjs";

import { catchError } from 'rxjs/operators';
import {AuthService} from "../../services/User/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements  CanActivate {

  constructor(private authSerive:AuthService , private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


  //  alert(" \n the islogiIn   "+ JSON.stringify(this.authSerive.isLoggedIn())    )
    return this.authSerive.isLoggedIn().pipe(
      catchError(() => {
        this.router.navigate(['/unauthorized']);
        return of(false);
      })
    );
  }

}
