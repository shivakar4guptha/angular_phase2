import {Directive} from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import {cusValPractice} from './customVal';

@Directive ({
    selector: '[cus-val][ngModel]',
    providers : [
        {
           provide : NG_VALIDATORS,
           useExisting : cusValPractice,
           multi : true 
        }
    ]
})
export class Validating {
    constructor(){
        console.log("from new directive");
    }

}