import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataHandleService } from '../data-handle.service';
import {SharingDataService} from '../sharing-data.service';
import { logging } from 'protractor';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  implements OnInit {
  @Output() sendEve = new EventEmitter();
  parentVal = "hello sending value";
  data = "hi";
  private test = 34;

  constructor(private dataHandleService: DataHandleService, private sharingDataService: SharingDataService) {
    console.log("second comp");
    
    
  }
  ngOnInit(){
    let passData = {
      "data" : this.data,
      "secData": this.parentVal

   }
    this.sendEve.emit(passData);
    this.dataHandleService.getData().subscribe((fetch)=>{
      console.log("accessing values using service", fetch);
    })
    this.sharingDataService.gettingData().subscribe((send)=>{
      console.log("sharingDataService data", send);
    })
  }
  
  login(){
    
    localStorage.setItem("shiva", "password");
    
  }
  logout(){
    localStorage.removeItem("shiva");
  }
}




