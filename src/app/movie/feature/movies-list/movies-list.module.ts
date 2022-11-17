import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'src/app/shared/ui/pagination/pagination.module';
import { SearchInputModule } from 'src/app/shared/ui/search-input/search-input.module';
import { MovieTileModule } from '../../ui/movie-tile/movie-tile.module';
import { MoviesListComponent } from './movies-list.component';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    NgbModule,
    BrowserModule,
    PaginationModule,
    SearchInputModule,
    MovieTileModule,
  ],
  exports: [NgbModule, MoviesListComponent],
})
export class MovieListModule {}
