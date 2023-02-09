import { Component,  OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { AppPage, Errors } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit{
  @Input() appPage:AppPage;
  @Output() next = new EventEmitter<AppPage>();
  @Output() hasErrors= new EventEmitter<any>();

  constructor(){}


  getResults(){    const appPageCopy = this.appPage;
    appPageCopy.visiblePanel = 'three';
    this.next.emit(appPageCopy);
  }


  ngOnInit(){}
}
