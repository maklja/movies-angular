import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { CamelCaseInterceptor } from './interceptors/camel-case.interceptor';
import { appInitializerFactory } from './initializer/appInitializer';
import { ConfigurationService } from './services/configuration.service';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchMoviesInputComponent } from './search-movies-input/search-movies-input.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieTileComponent,
    PaginationComponent,
    SearchMoviesInputComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
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
