import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
  private authService: AuthenticationService;
  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }
  public ngOnInit(): void {
    this.authService.logout().subscribe(
      (response) => {
        localStorage.removeItem('token');
        window.location.href = '/';
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
