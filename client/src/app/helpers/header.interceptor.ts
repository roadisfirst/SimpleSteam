import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headerReq = request;
    headerReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    })
    return next.handle(headerReq);
  }
}

export const headerInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
];