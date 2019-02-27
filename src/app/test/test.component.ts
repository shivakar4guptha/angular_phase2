import { Component, OnInit } from '@angular/core';
import {AppComponent, ABC } from '../app.component';
//import{ Second, Abc} from '../first-comp/first-comp.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  m1(){

  }
  

}

export class SecondComp{
  shiva = "abcdef";
}
var comp = new TestComponent();