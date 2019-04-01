import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[validCreditCard]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CreditCardValidator, multi: true }
  ]
})
export class CreditCardValidator implements Validator {

  validate(c: FormControl): ValidationErrors | null {
    return CreditCardValidator.validateCcNumber(c);
  }

  static validateCcNumber(control: FormControl): ValidationErrors | null {
     
    return { creditCard: 'Your credit card number is not from a supported credit card provider' };
  }
}