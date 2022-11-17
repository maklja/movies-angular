import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './movie-details.component';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [NgbModule, BrowserModule],
  exports: [NgbModule, MovieDetailsComponent],
})
export class MovieDetailsModule {}
