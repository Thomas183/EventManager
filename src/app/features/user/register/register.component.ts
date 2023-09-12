import { Component } from '@angular/core';
import { LoggerService } from '../../../core/services/logger.service';
import { FullUser } from '../../../shared/models/full-user';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { interval } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  exampleUser : FullUser = {
    pseudo:  'Toma',
    email: 'thomascourbet08@gmail.com',
    password: 'ws_T15D^gl',
    firstName : 'Thomas',
    lastName: 'Courbet'
  }

  registerForm : FormGroup
  constructor(private _logger : LoggerService, private _fb : FormBuilder) {
    this.registerForm = this._fb.group({
      pseudo : [null, Validators.required],
      mail : [null, Validators.required],
      password : [null, Validators.required],
      confirmPassword : [null, Validators.required, [this.passwordMatchValidator()]],
      lastname : [null, Validators.required],
      name : [null, Validators.required],
    });
  }

  passwordMatchValidator() : ValidatorFn | null {
    console.log(new Date());
    return (control : AbstractControl) => {
      if (this.password === control.value) {
        return null
      }
      return { password : true }
    }
  }

  get password() : any {
    return this.registerForm.get('password')?.value;
  }
}
