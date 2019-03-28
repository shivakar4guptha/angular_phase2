import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user = {
    "fn": "asdf",
    "ln":"asdasdfff",
    "add": "561661",
    "email": ""
  }
  element;
  constructor(el: ElementRef) {
    this.element = el;
    this.element.nativeElement.style.marginTop = "200px";
    //this.element.nativeElement.style.display = "none";

    console.log(this.element);
   }

  ngOnInit() {
  }

  // submit(form){
  //   console.log(form);
  // }
  addressForm(address){
    // debugger;
    console.log("Address is", address);
    //this.user.fn

  }
}
