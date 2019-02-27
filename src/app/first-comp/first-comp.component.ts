import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { SecondComp } from '../test/test.component';
import { Data } from "./first.comp.data";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  data: any;
  data1: Data = new Data();
  constructor(private sampleService: SampleService) {
    this.data1.name;
    this.data = 23;
    //this.secondCom;
   }

  ngOnInit() {
    let a;
    console.log(a);
    console.log("data is....", this.data);
    console.log(this.sampleService);
    console.log(this.data1.name);
    //console.log("fjjfjf", this.secondComp.shiva);
  }
  onClickMeth(event){
    console.log("clicked....", event);
    event.stopPropagation();
    
  }
  press(event){
    console.log("keyup...", event);
  }
  newnum(event){
    event.stopPropagation();
    console.log("dddd",event);
  }

}

export class Second{}
export interface Abc{
  m1();
}