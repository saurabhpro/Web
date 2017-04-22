import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenStringValidator(strReg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        //value from form control
        const str = control.value;
        //match using regex
        const invalid = strReg.test(str);

        //return js object [ternary is aslo called elvis operator :O ]
        return invalid ? { 'forbiddenString': { str } } : null;
    }
}