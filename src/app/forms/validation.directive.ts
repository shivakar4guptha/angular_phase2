import {Directive} from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import {CusValPractice} from './customVal';

@Directive ({
    selector: '[cusval][ngModel]',
    providers : [
        {
           provide : NG_VALIDATORS,
           useExisting : CusValPractice,
           multi : true 
        }
    ]
})
export class Validating {
    constructor(){
        console.log("from new directive");
    }

}