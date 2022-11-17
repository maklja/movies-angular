import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  valueDebouncedUpdate = new Subject<string>();
  @Input() value = '';
  @Output() valueChange = new EventEmitter();

  constructor() {
    this.valueDebouncedUpdate
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => this.valueChange.emit(value));
  }

  ngOnInit(): void {}
}
