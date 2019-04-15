import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'explore-form',
  templateUrl: './explore-form.component.html',
  styleUrls: ['./explore-form.component.css']
})
export class ExploreFormComponent implements OnInit {
  phone : String ="";
  vayasu : Number =0;
  jeetam : Number = 0;
  deepDive : FormGroup;
  mail = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.deepDive = this.formBuilder.group({
      phone: ['',[Validators.required, Validators.minLength(10), Validators.pattern("[1-9]{1}-[1-9]{3}-[0-9]{3}-[0-9]{4}$")]],
      vayasu: ['',[Validators.required, Validators.maxLength(3)]],
      jeetam: ['',[Validators.required, Validators.minLength(10)]],
      mail: ['',[Validators.required, Validators.email]],
    });

    this.deepDive.valueChanges.subscribe((val) => {
      console.log("fasdf",val);
      if(val.phone == "123"){
        val.phone = "698";
        console.log("chnaged....")
        this.deepDive.controls.phone.patchValue("343");
      }
    })
  }
  get deepVal(){
    return this.deepDive.controls;
  }
  deepDiveData(data){
    //console.log("reactive values", this.deepDive.controls.phone.value);
    return data;
  }

}
