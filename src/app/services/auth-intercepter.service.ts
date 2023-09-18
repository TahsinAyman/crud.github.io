import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HttpStatus } from '../entity/HttpStatus';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthIntercepterService implements HttpInterceptor {
  private authService: AuthenticationService;
  private router: Router;
  constructor(authService: AuthenticationService, router: Router) {
    this.authService = authService;
    this.router = router;
  }
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.loggedIn()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        if (err.status === HttpStatus.UNAUTHORIZED) {
          localStorage.removeItem('token');
          this.router.navigate(['/auth/login']);
        }
        throw err;
      })
    );
  }
}
