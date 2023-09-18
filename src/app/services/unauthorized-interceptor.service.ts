import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedInterceptorService implements HttpInterceptor {
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err.status === 403) {
          this.router.navigate(['/unauthorized']);
        }
        throw err;
      })
    );
  }
}
