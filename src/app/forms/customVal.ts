import {Directive} from '@angular/core';
import { Validator, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class cusValPractice implements Validator {

    data;
    validate(control: AbstractControl): ValidationErrors {
        
        return this.data(control);
    }
    constructor() {
        console.log("from cusvalPractice");
        this.data = this.verify()
    }
    verify() : ValidatorFn{
        //...
        //......
        console.log("from verify method...");
        return null;
    }
}