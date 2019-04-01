import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent implements OnInit {

  testForm: FormGroup ;
  fname : String = "";
  sname : String = "";

  constructor(private formBuilder: FormBuilder) {
    this.testForm = formBuilder.group({
      fname : new FormControl(),
      sname : new FormControl()
    })
   }

  ngOnInit() {
  }

  testformData(form: any){
    console.log(form.controls);
  }

}
