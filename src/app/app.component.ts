import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import answersValues from './utils/answers.json';

export interface AppPage {
  visiblePanel: string;
  question: string;
  mode: boolean;
  answers: string[];
  custom: string[];
  answer: string;
}

export interface Errors {
  show: boolean;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  errors = {
    show: false,
    message: null,
  };

  title = 'The Decide App';
  appPage: AppPage = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answersValues.answers,
    custom: [],
    answer: '',
  };

  handleNext(values: AppPage) {
    this.appPage = values;
  }

  handleErros(values: Errors) {
    const errorsCopy = this.errors;
    this.errors = {
      show: values.show,
      message: values.message,
    };
    setTimeout(() => {
      this.errors = errorsCopy;
    }, 2000);
  }

  handleReset() {
    let appPageCopy = this.appPage;
    appPageCopy = {
      ...appPageCopy,
      visiblePanel: 'one',
      question: '',
      mode: false,
      custom: [],
      answer: '',
    };
    this.appPage = appPageCopy;
  }
  ngOnInit() {}
}
