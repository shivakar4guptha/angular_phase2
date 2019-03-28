import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shivaPOC';
  abc= 23;
  isAvalilable = true;
  obj = {"dsd":"dsd"};
  bindVal;
  // constructor(){
    
  // }
  fromChildCmp(hello){
    console.log("without giving event",hello);
  }
  fetchEve(value){
    console.log("app secnd value is", value.data + value.secData)
  }
}

export class ABC{}
