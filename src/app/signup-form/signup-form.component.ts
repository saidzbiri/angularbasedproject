import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

/*   form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
    UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  }); */

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  onLogin() {
    if (!this.form.valid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
    console.log(this.form.value);
  }
}
