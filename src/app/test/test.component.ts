import { Component, OnInit } from '@angular/core';
import {AppComponent, ABC } from '../app.component';
//import{ Second, Abc} from '../first-comp/first-comp.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  secArray = ["dkhsd", 233, 'ss','fsf', 44];
  newAddr = {
    "sdksd": "aba",
    "sdkdjdjdsd": "abajsj",
    "sdssssssksd": "abaww",
    "sdweddksd": "aba",
    "swwwdksd": "aba",
  };
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  getKeys(){
    return Object.keys(this.newAddr);
  }
  m1(){

  }
  

}

export class SecondComp{
  shiva = "abcdef";
}
var comp = new TestComponent();
