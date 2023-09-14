import {Component} from '@angular/core';
import {LoggerService} from '../../../core/services/logger.service';
import {FullUser} from '../../../shared/models/full-user';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {interval} from 'rxjs';
import {Router} from "@angular/router";
import {Credentials} from "../../../core/models/credentials";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  exampleUser: FullUser = {
    pseudo: 'Toma',
    email: 'thomascourbet08@gmail.com',
    password: 'ws_T15D^gl',
    firstName: 'Thomas',
    lastName: 'Courbet'
  }

  registerForm: FormGroup

  constructor(private _logger: LoggerService, private _fb: FormBuilder, public _router: Router) {
    this.registerForm = this._fb.group({
      pseudo: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    }, {validator: this.passwordMatchValidator});
  }

  // TODO Pas oublier de changer ce truc
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('Password');
    const confirmPassword = control.get('ConfirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({mismatch: true});
      return {mismatch: true};
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      delete formData.confirmPassword;

      this._logger.register(formData as FullUser).subscribe({
        next: response => {
          console.log('Register Successful : ', response);
          const user: Credentials = {
            identifier: formData.email,
            password: formData.password,
          }
          this._logger.logon(user);
          this._router.navigate(['home'])
        },
        error: error => {
          console.log('Register Failed : ', error);
        }
      });
    }
  }
}
