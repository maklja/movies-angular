import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { CamelCaseInterceptor } from './interceptors/camel-case.interceptor';
import { appInitializerFactory } from './initializer/appInitializer';
import { ConfigurationService } from './shared/data-access/configuration.service';
import { PaginationModule } from './shared/ui/pagination/pagination.module';
import { SearchInputModule } from './shared/ui/search-input/search-input.module';
import { MovieListModule } from './movie/feature/movies-list/movies-list.module';
import { MovieDetailsModule } from './movie/feature/movie-details/movie-details.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    PaginationModule,
    SearchInputModule,
    MovieListModule,
    MovieDetailsModule,
    NotFoundModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [ConfigurationService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CamelCaseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
