import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  isLoggedIn : boolean = this._authService.isUserLoggedin()

  menuItems = [
    {
      label : "Acceuil",
      routerLink : "home",
    },
    {
      label : "Événements",
      items: [
        {
          label : "Événements à venir",
          routerLink: "events"
        },
        {
          label: "Mes événements",
          routerLink: "user-events",
          disabled: !this.isLoggedIn
        },
        {
          label: "Créer un événement",
          routerLink: "createEvent",
          disabled: !this.isLoggedIn
        }
      ]
    },
  ]
  constructor(private _authService : AuthService, private _router : Router) {

  }

  logout(): void {
    this._authService.logOut();
    this._router.navigate(['home'])
  }

}
