import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators , AsyncValidatorFn} from '@angular/forms';
import { CheckType } from '@angular/core/src/view';

@Component({
  selector: 'reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent implements OnInit {

  testForm: FormGroup ;
  fname : String = "";
  sname : String = "";
  somethingVal: CheckType;
  sample =  "sample";
  data = {
    'hi' : "hello"
  }
  date =new Date();

  constructor(private formBuilder: FormBuilder) {
    this.testForm = formBuilder.group({
      fname : ['', [Validators.required, Validators.minLength(2)]],
      sname : ['', [Validators.minLength(2)]],
      somethingVal: [Validators.requiredTrue]
    })
   }

  ngOnInit() {
    console.log("date is", this.date);
  }

  testformData(form: any){
    //console.log(form.controls);
  }

  get f(){
    //console.log(this.testForm.controls);
        return this.testForm.controls;
  }

}
