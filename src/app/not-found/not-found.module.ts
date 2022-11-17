import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NgbModule, BrowserModule],
  exports: [NgbModule, NotFoundComponent],
})
export class NotFoundModule {}
