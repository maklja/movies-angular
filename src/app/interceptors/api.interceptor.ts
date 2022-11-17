import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { apiBaseUrl, apiVersion, apiKey } = environment;
    const apiRequest = request.clone({
      url: `${apiBaseUrl}/${apiVersion}/${request.url}`,
      params: request.params.append('api_key', apiKey),
      headers: request.headers.append('Accept', 'application/json'),
    });
    return next.handle(apiRequest);
  }
}
