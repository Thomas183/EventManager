import { Component } from '@angular/core';
import { LoggerService } from '../../core/services/logger.service';
import { FullUser } from '../../core/models/full-user';


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
  constructor(private _logger : LoggerService) {
    _logger.register(this.exampleUser)
    _logger.logon({identifier: 'Toma', password: 'ws_T15D^gl'})
  }

}
