import { Injectable } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { CanActivate, Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService: AuthenticationService;
  private router: Router;
  constructor(authService: AuthenticationService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
