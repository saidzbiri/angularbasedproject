import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  // Asynchro no blocking of User Interface Experience
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    // UsernameValidators.sleep(10);
    console.log('in should be unique function');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (control.value === 'said') {
            resolve({shouldBeUnique: true});
          }
          else {
            resolve(null);
          }
      }, 4000);
    });
  }

  static sleep(seconds){
    console.log('waiting for 10s');
    const e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
    console.log('done');
  }
}
