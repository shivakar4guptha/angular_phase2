import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { SecondComp } from '../test/test.component';
import { Data } from "./first.comp.data";
import { FirstServiceService } from "../first-service.service";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  data: any;
  data1: Data = new Data();
  secondVar: SecondComp = new SecondComp();
  name : String = "hgffd";
  age : number = 0;
  address : Object = {};
  response: any;
  userRegData: any;
  testAry = [1,2,3,4,5];
  bigData = [{  
    "id":"2028",
    "employee_name":"sdjkdfhkjdfhkjdfhjkhdfk",
    "employee_salary":"12255",
    "employee_age":"0",
    "profile_image":""
  },
  {  
      "id":"2030",
      "employee_name":"jfjfjfjfjdk",
      "employee_salary":"37478",
      "employee_age":"23",
      "profile_image":""
  },
  {  
    "id":"2660",
    "employee_name":"3ufhf",
    "employee_salary":"37hjknkdd478",
    "employee_age":"236555",
    "profile_image":""
  }];
  constructor(private sampleService: SampleService, private firstService: FirstServiceService) {
    this.data1.name;
    this.data = 23;
    console.log(this.secondVar.shiva)
  }

  ngOnInit() {

    let a;
    console.log(a);
    console.log("data is....", this.data);
    console.log(this.sampleService);
    console.log(this.data1.name);
    //console.log("fjjfjf", this.secondComp.shiva);
    this.sampleService.getJsonData().subscribe((res) => {
      console.log("res is...", res);
      this.response = this.bigData;

    })
    this.sampleService.postJsonDaeta(this.userRegData).subscribe( (res) => {
      console.log(res);
    })
    this.firstService.getSamleData().subscribe((val)=> {
      console.log("values",val);
    })

    //(a) => {}
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