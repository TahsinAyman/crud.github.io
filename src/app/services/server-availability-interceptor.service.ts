import {
  HttpErrorResponse,
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
export class ServerAvailabilityInterceptorService implements HttpInterceptor {
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        if (err.status === 0) {
          this.router.navigate(['/server-offline']);
        }
        throw err;
      })
    );
  }
}
