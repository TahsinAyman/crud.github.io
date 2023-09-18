import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private authService: AuthenticationService;
  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }
  public loggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
