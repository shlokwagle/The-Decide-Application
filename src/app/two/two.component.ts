import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppPage, Errors } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  @Input() appPage: AppPage;
  @Output() next = new EventEmitter<AppPage>();
  @Output() hasErrors = new EventEmitter<any>();

  constructor() {}

  getResults() {
    if (this.validateResults()) {
      const appPageCopy = this.appPage;
      appPageCopy.visiblePanel = 'three';
      this.next.emit(appPageCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'You need at least two answers',
      });
    }
  }

  validateResults() {
    if (this.appPage.mode) {
      if (this.appPage.custom.length > 1) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  changeMode() {
    const appPageCopy = this.appPage;
    appPageCopy.mode = true;
    this.next.emit(appPageCopy);
  }
  addCustom(custom) {
    if (custom.value !== '') {
      const appPageCopy = this.appPage;
      appPageCopy.custom.push(custom.value);
      this.next.emit(appPageCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'the field is empty',
      });
    }
  }

  ngOnInit() {}
}
