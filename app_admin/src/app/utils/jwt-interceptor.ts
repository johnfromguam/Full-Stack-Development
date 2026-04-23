import { 
  HttpInterceptor, 
  HTTP_INTERCEPTORS,
  HttpRequest, 
  HttpHandler, 
  HttpEvent 
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication } from '../services/authentication';  

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor (
    private authentication: Authentication
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      let isAuthAPI: boolean;
      if(request.url.includes('login') ||
        request.url.includes('register')) {
          isAuthAPI = true;
        }
      else {
        isAuthAPI = false;
      }

      if(this.authentication.isLoggedIn() && !isAuthAPI) {
        const token = this.authentication.getToken
        const authReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(authReq);
      }
      return next.handle(request);
    }
}
export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};
