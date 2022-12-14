import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [NgbModule, BrowserModule, FormsModule],
  exports: [NgbModule, SearchInputComponent],
})
export class SearchInputModule {}
