import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../core/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    public loaderService: LoaderService;
    constructor(loaderService: LoaderService) {
        this.loaderService = loaderService;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        return next.handle(req);
    }

    private showLoader(): void {
        this.loaderService.show();
    }
    private hideLoader(): void {
        this.loaderService.hide();
    }
}