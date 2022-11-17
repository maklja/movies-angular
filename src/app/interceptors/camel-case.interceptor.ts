import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { camelizeKeys } from 'humps';

@Injectable()
export class CamelCaseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((httpEvent) => {
        if (!(httpEvent instanceof HttpResponse)) {
          return httpEvent;
        }

        const httpResponseEvent: HttpResponse<unknown> = httpEvent;
        const contentTypeHeader = httpResponseEvent.headers.get('content-type');
        return contentTypeHeader?.includes('application/json')
          ? httpResponseEvent.clone({
              body: camelizeKeys(httpResponseEvent.body),
            })
          : httpEvent;
      })
    );
  }
}
