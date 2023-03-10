import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppPage } from '../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appPage: AppPage;
  @Output() next = new EventEmitter<AppPage>();
  @Output() resetValues = new EventEmitter<boolean>();

  constructor() {}

  showResults() {
    const appPageCopy = this.appPage;
    const answersArray = this.appPage.answers;
    const customArray = this.appPage.custom;
    let result: string = '';
    if (!this.appPage.mode) {
      result = answersArray[Math.floor(Math.random() * answersArray.length)];
    } else {
      result = customArray[Math.floor(Math.random() * customArray.length)];
    }
    appPageCopy.answer = result;
    this.next.emit(appPageCopy);
  }
  doItAgain() {
    this.showResults();
  }

  startOver() {
    this.resetValues.emit(true);
  }
  ngOnInit() {
    this.showResults();
  }
}
