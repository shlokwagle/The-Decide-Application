import { Component,  OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { AppPage } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit{
  @Input() appPage:AppPage;

  ngOnInit(){}
}
