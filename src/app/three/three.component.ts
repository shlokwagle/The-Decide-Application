import { Component,  OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { AppPage } from '../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit{
@Input() appPage:AppPage;
ngOnInit(){}
}

