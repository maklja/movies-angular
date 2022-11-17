import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [NgbModule, BrowserModule],
  exports: [NgbModule, PaginationComponent],
})
export class PaginationModule {}
