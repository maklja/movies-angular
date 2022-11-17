import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieTileComponent } from './movie-tile.component';

@NgModule({
  declarations: [MovieTileComponent],
  imports: [NgbModule, BrowserModule],
  exports: [NgbModule, MovieTileComponent],
})
export class MovieTileModule {}
