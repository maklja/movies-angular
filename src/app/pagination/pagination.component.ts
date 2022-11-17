import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  private _totalPages = 1;
  @Input() visiblePages = 5;
  @Input() page = 1;
  @Input() disabled = false;
  @Output() change = new EventEmitter<number>();

  get totalPages() {
    return this._totalPages;
  }

  @Input() set totalPages(pages) {
    this._totalPages = pages < 1 ? 1 : pages;
  }

  retrievePageNumbers() {
    const diff = Math.floor(this.visiblePages / 2);
    return Array(Math.min(this.visiblePages, this.totalPages))
      .fill(null)
      .map((_, i) => Math.max(this.page - diff, 1) + i)
      .filter((pageIndex) => pageIndex <= this.totalPages);
  }

  setPage(event: MouseEvent, page: number) {
    event.preventDefault();
    this.page = page;
    this.onPageChange();
  }

  firstPage(event: MouseEvent) {
    event.preventDefault();
    this.page = 1;
    this.onPageChange();
  }

  lastPage(event: MouseEvent) {
    event.preventDefault();
    this.page = this.totalPages;
    this.onPageChange();
  }

  private onPageChange() {
    this.change.emit(this.page);
  }
}
