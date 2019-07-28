import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('token');
        if (authToken) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
            })
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}