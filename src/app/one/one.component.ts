import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppPage } from '../app.component';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})


export class OneComponent implements OnInit{

  @Input() appPage:AppPage;
  @Output() next = new EventEmitter<AppPage>();
  @Output() hasErrors= new EventEmitter<any>();

  questionSubmit(question: HTMLInputElement){
    const appPageCopy = this.appPage;

    if(question.value !== ''){
      appPageCopy.visiblePanel = 'two';
      appPageCopy.question = question.value;

      this.next.emit(appPageCopy);
    }
    else{
      //show errors
      this.hasErrors.emit({
        show: true,
        message: "no question found, please enter a question"
      })
    }
  }

  ngOnInit(){}
}
