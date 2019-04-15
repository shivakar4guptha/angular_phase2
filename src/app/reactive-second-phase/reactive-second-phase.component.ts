import { Component, OnInit } from '@angular/core';
import {FormControlName, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-second-phase',
  templateUrl: './reactive-second-phase.component.html',
  styleUrls: ['./reactive-second-phase.component.css']
})
export class ReactiveSecondPhaseComponent implements OnInit {
  address1 = "";
  uru : String ="";
  pincode : Number =0;
  vali2 : FormGroup;


  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
      this.vali2 = this.formBuilder.group({
        address1: ['Street1', [Validators.required, Validators.minLength(2)]],
        pincode: ['', [Validators.required, Validators.maxLength(5)]],
        uru: ['Enter City', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]]
        
      });
  }
  get phase2Val(){
    return this.vali2.controls;
  }

}
