import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  menuItems = [
    {
      label : "Acceuil",
      routerLink : "home",
    },
    {
      label : "Événements",
      routerLink: "events",
      Items: [
        {
          label : "test"
        }
      ]
    },
    {
      label : "Connexion",
      routerLink: "login"
    }
  ]
}
