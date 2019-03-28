import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleService } from '../sample.service';
import { SecondComp } from '../test/test.component';
import { Data } from "./first.comp.data";
import { FirstServiceService } from "../first-service.service";
import { DataHandleService } from "../data-handle.service";
import {Address} from "./data";
import {SharingDataService} from '../sharing-data.service';


@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  @Input("abcFromParent") abcVal;
  @Input("objFromParent") objVal;
  @Input("bindedVal") accessVal;
  @Output() triggerEvnt = new EventEmitter();
  data: any;

  data1: Data = new Data();
  secondVar: SecondComp = new SecondComp();
  name : String = "hgffd";
  age : number = 0;
  address : Address = new Address();
  response: any;
  userRegData: any;
  testAry = [1,2,3,4,5];
  
  bigData = [{  
    "id":"4846",
    "employee_name":"sdjkdfhkjdfhkjdfhjkhdfk"
  },
  {  
      "id":"4851",
      "employee_name":"jfjfjfjfjdk"
  },
  {  
    "id":"4850",
    "employee_name":"3ufhf"
  }];
  fn;
  sal;
  dob;
  signUpData = {
    "name": "",
    "salary" : "",
    "age" : ""
  }
  name1 : String = "af24%#34";
  age1 : Number = 25;
  address1 : any = {};
  isAvaible : boolean = true;
  retrieveId;
  printVal;
  isLoggedIn: boolean = true;
  constructor(private sampleService: SampleService, private firstService: FirstServiceService, 
    private dataHandleService: DataHandleService, private sharingDataService: SharingDataService) {
    this.data1.name;
    this.data = 23;
    console.log(this.secondVar.shiva);
    // if(localStorage.getItem("shiva") != "" || 'undefined'){
    //   localStorage.removeItem("shiva");
    // }
  }

  ngOnInit() {
    this.address.isAvailbae = true;
    this.address.pincode = 3434;
    let a;
    console.log(a);
    console.log("data is....", this.data);
    console.log(this.sampleService);
    console.log(this.data1.name);
    //console.log("fjjfjf", this.secondComp.shiva);
    this.sharingDataService.sendingData(this.bigData);
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
    
    console.log("second value from app", this.objVal);
    
    // this.sampleService.getEmpData(id).subscribe ( (res) =>  {
    //   console.log("::::::::::::::", res);
    // })
    console.log("show value from app", this.accessVal);
    
  }

  deleting (){
    console.log("from app component....", this.abcVal);
    this.sampleService.deleteJsonData(this.signUpData).subscribe((val)=>{
      console.log(val);
    })
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
calculateAge() {
  let age = true;
// 
// 
// 
// 
// 
// 
//   
  return age;
}

  postServ(){
    this.dataHandleService.setData("hi");
    this.signUpData.name = this.fn;
    this.signUpData.salary = this.sal;
    this.signUpData.age = this.dob;
    console.log("clicked");
    this.sampleService.postJsonDaeta(this.signUpData).subscribe((res) =>{
      console.log("res from post call is..." + res);
    })
    this.triggerEvnt.emit(this.name);
  }
  empty(){
    this.fn = "";
    this.sal = "";
    this.dob = "";
  }
  newTry(id){
    this.sampleService.getEmpData(id).subscribe((val)=>{
      this.printVal = val;
      console.log("printvalue",this.printVal);

    })
  }
}

export class Second{}
export interface Abc{
  m1();
}